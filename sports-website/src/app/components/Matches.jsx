async function getLiveMatches() {
  try {
    const res = await fetch('https://api.football-data.org/v4/matches', {
      headers: {
        'X-Auth-Token': process.env.FOOTBALL_API_KEY,
      },
      next: { revalidate: 60 },
    });
    
    if (!res.ok) return [];
    const data = await res.json();
    return data.matches || [];
  } catch (error) {
    return [];
  }
}

export default async function Matches() {
  const matches = await getLiveMatches();

  return (
    <section className="mb-8 bg-green-50/70 border border-green-200/80 p-5 rounded-3xl shadow-sm">
      <h2 className="text-xl font-bold mb-5 flex items-center justify-between text-green-900">
        <span className="flex items-center gap-2"><span>⚽</span> مباريات اليوم </span>
        <span className="text-xs text-green-700 font-medium bg-green-100 px-3 py-1 rounded-full">مباشرة من السيرفر</span>
      </h2>
      <div className="space-y-4">
        {matches.length === 0 ? (
          <div className="bg-white p-6 rounded-2xl text-center border border-green-200 text-slate-600 shadow-sm">
            جاري جلب المباريات الحقيقية أو لا توجد مباريات مسجلة اليوم...
          </div>
        ) : (
          matches.slice(0, 4).map((match) => (
            <div key={match.id} className="bg-white p-4 rounded-2xl border border-green-200/80 shadow-sm flex items-center justify-between hover:border-green-500 transition-all">
              
              <div className="w-1/3 flex items-center gap-2 justify-start font-bold text-slate-800">
                {match.homeTeam.crest ? (
                  <img src={match.homeTeam.crest} alt={match.homeTeam.name} className="w-6 h-6 object-contain shrink-0" />
                ) : (
                  <div className="w-6 h-6 bg-slate-200 rounded-full shrink-0"></div>
                )}
                <span className="truncate text-xs sm:text-sm">{match.homeTeam.name}</span>
              </div>

              <div className="w-1/3 text-center">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-1 bg-green-100 text-green-800">
                  {match.status}
                </span>
                <div className="text-lg font-black tracking-wider text-slate-900">
                  {match.score.fullTime.home ?? 0} - {match.score.fullTime.away ?? 0}
                </div>
              </div>

              <div className="w-1/3 flex items-center gap-2 justify-end font-bold text-slate-800">
                <span className="truncate text-xs sm:text-sm text-right">{match.awayTeam.name}</span>
                {match.awayTeam.crest ? (
                  <img src={match.awayTeam.crest} alt={match.awayTeam.name} className="w-6 h-6 object-contain shrink-0" />
                ) : (
                  <div className="w-6 h-6 bg-slate-200 rounded-full shrink-0"></div>
                )}
              </div>

            </div>
          ))
        )}
      </div>
    </section>
  );
}