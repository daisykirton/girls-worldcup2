const API_URL = 'https://v3.football.api-sports.io/fixtures?league=1&season=2026';

export default async function handler(req, res) {
  const key = process.env.API_FOOTBALL_KEY || process.env.API_KEY;
  res.setHeader('Cache-Control', 's-maxage=180, stale-while-revalidate=300');
  if (!key) {
    return res.status(200).json({ configured: false, matches: [], message: 'Missing API_FOOTBALL_KEY environment variable.' });
  }

  try {
    const apiRes = await fetch(API_URL, { headers: { 'x-apisports-key': key } });
    const json = await apiRes.json();
    const matches = (json.response || []).map((f) => ({
      id: f.fixture?.id,
      date: f.fixture?.date,
      status: f.fixture?.status?.short || f.fixture?.status?.long || 'NS',
      home: f.teams?.home?.name,
      away: f.teams?.away?.name,
      h: Number.isFinite(f.goals?.home) ? f.goals.home : null,
      a: Number.isFinite(f.goals?.away) ? f.goals.away : null,
      venue: f.fixture?.venue?.name || '',
      round: f.league?.round || ''
    }));
    return res.status(200).json({ configured: true, updatedAt: new Date().toISOString(), matches });
  } catch (error) {
    return res.status(500).json({ configured: true, matches: [], error: error.message });
  }
}
