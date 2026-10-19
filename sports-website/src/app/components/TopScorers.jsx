async function getTopScorers(leagueCode) {
  try {
    const res = await fetch(`https://api.football-data.org/v4/competitions/${leagueCode}/scorers`, {
      headers: {
        'X-Auth-Token': process.env.FOOTBALL_API_KEY,
      },
      next: { revalidate: 3600 },
    });
    
    if (!res.ok) return [];
    const data = await res.json();
    return data.scorers || [];
  } catch (error) {
    return [];
  }
}

export default async function TopScorers({ league = 'PL' }) {
  const scorers = await getTopScorers(league);

  return (
    <section className="mb-8 bg-green-50/70 border border-green-200/80 p-5 rounded-3xl shadow-sm">
      <h2 className="text-xl font-bold mb-5 flex items-center justify-between text-green-900">
        <span className="flex items-center gap-2"><span></span> قائمة الهدافين </span>
        <span className="text-xs text-green-700 font-medium bg-green-100 px-3 py-1 rounded-full">محدث لحظياً</span>
      </h2>
      <div className="bg-white rounded-2xl border border-green-200/80 overflow-hidden shadow-sm">
        <table className="w-full text-right border-collapse">
          <thead>
            <tr className="border-b border-green-100 text-green-800 text-xs bg-green-50/50">
              <th className="p-4"></th>
              <th className="p-4">اللاعب</th>
              <th className="p-4">الفريق</th>
              <th className="p-4 text-center">الأهداف</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-sm">
            {scorers.length === 0 ? (
              <tr>
                <td colSpan="4" className="p-6 text-center text-slate-500">لا توجد بيانات هدافين متاحة لهذا الدوري حالياً...</td>
              </tr>
            ) : (
              scorers.slice(0, 5).map((item, index) => (
                <tr key={item.player.id} className="hover:bg-green-50/40 transition">
                  <td className="p-4 font-bold text-green-700">{index + 1}</td>
                  <td className="p-4 font-semibold text-slate-800">{item.player.name}</td>
                  <td className="p-4 text-slate-500">{item.team.name}</td>
                  <td className="p-4 text-center font-bold text-slate-900">{item.goals}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}