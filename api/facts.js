export default async function handler(request, response) {
  const name = String(request.query?.name || '').trim();
  const key = process.env.GEMINI_API_KEY;

  if (!key) {
    return response.status(500).json({ error: 'GEMINI_API_KEY is not configured on Vercel' });
  }

  if (!name) {
    return response.status(400).json({ error: 'Player name is required' });
  }

  try {
    const prompt = `Give me 3 unique, interesting, and lesser-known fun facts about the football player ${name}. Focus on their childhood, hobbies, favorite food, early career struggles, or unique personal stories. Do not include basic stats (like how many goals they scored) or current club info. Format the response as a strict JSON array of strings, like this: ["Fact 1", "Fact 2", "Fact 3"]`;

    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${key}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          temperature: 0.7,
          responseMimeType: "application/json"
        }
      })
    });

    const data = await res.json();
    if (data.error) {
      return response.status(502).json({ error: 'Failed to fetch facts from AI', details: data.error.message });
    }

    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || '[]';
    let facts = [];
    try {
      facts = JSON.parse(text);
    } catch (e) {
      facts = [text];
    }

    return response.status(200).json({ facts });
  } catch (error) {
    return response.status(500).json({ error: 'Internal server error', details: error.message });
  }
}
