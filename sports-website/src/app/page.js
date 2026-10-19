import LeaguesNav from './components/LeaguesNav';
import Matches from './components/Matches';
import Standings from './components/Standings';
import TopScorers from './components/TopScorers';

export default async function Home({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const currentLeague = resolvedSearchParams?.league || 'PL';

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 p-4 sm:p-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-black text-center mb-8 text-green-600">⚽ شمشون سبورت</h1>
      
      {/* أزرار الدوريات التفاعلية */}
      <LeaguesNav activeLeague={currentLeague} />

      {/* مباريات اليوم */}
      <div className="mb-8">
        <Matches />
      </div>

      {/* جدول الترتيب والهدافين بناءً على الدوري المختار */}
      <div className="grid grid-cols-1 gap-8">
        <Standings league={currentLeague} />
        <TopScorers league={currentLeague} />
      </div>

      <footer className="text-center text-slate-400 text-xs mt-12 py-6 border-t border-slate-200">
        جميع الحقوق محفوظة © 2026 - موقع شمشون سبورت
      </footer>
    </main>
  );
}