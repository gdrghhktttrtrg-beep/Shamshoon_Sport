async function getStandings(leagueCode) {
  try {
    const res = await fetch(`https://api.football-data.org/v4/competitions/${leagueCode}/standings`, {
      headers: {
        'X-Auth-Token': process.env.FOOTBALL_API_KEY,
      },
      next: { revalidate: 3600 },
    });
    
    if (!res.ok) return [];
    const data = await res.json();
    return data.standings?.[0]?.table || [];
  } catch (error) {
    return [];
  }
}

export default async function Standings({ league = 'PL' }) {
  const standings = await getStandings(league);

  return (
    <section className="mb-8 bg-green-50/70 border border-green-200/80 p-5 rounded-3xl shadow-sm">
      <h2 className="text-xl font-bold mb-5 flex items-center justify-between text-green-900">
        <span className="flex items-center gap-2"><span></span> جدول الترتيب </span>
        <span className="text-xs text-green-700 font-medium bg-green-100 px-3 py-1 rounded-full">محدث لحظياً</span>
      </h2>
      <div className="bg-white rounded-2xl border border-green-200/80 overflow-hidden shadow-sm">
        <table className="w-full text-right border-collapse">
          <thead>
            <tr className="border-b border-green-100 text-green-800 text-xs bg-green-50/50">
              <th className="p-4"></th>
              <th className="p-4">الفريق</th>
              <th className="p-4 text-center">لعب</th>
              <th className="p-4 text-center">النقاط</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-sm">
            {standings.length === 0 ? (
              <tr>
                <td colSpan="4" className="p-6 text-center text-slate-500">جاري جلب جدول الترتيب...</td>
              </tr>
            ) : (
              standings.map((row) => (
                <tr key={row.team.id} className="hover:bg-green-50/40 transition">
                  <td className="p-4 font-bold text-green-700">{row.position}</td>
                  <td className="p-4 font-semibold text-slate-800 flex items-center gap-3">
                    {row.team.crest ? (
                      <img src={row.team.crest} alt={row.team.name} className="w-6 h-6 object-contain" />
                    ) : (
                      <div className="w-6 h-6 bg-slate-200 rounded-full"></div>
                    )}
                    <span>{row.team.name}</span>
                  </td>
                  <td className="p-4 text-center text-slate-600">{row.playedGames}</td>
                  <td className="p-4 text-center font-bold text-slate-900">{row.points}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}