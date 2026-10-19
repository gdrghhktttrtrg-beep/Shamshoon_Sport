import Link from 'next/link';

const leagues = [
  { id: 'PL', name: 'الدوري الإنجليزي', emblem: 'https://crests.football-data.org/PL.png' },
  { id: 'PD', name: 'الدوري الإسباني', emblem: 'https://crests.football-data.org/PD.png' },
  { id: 'SA', name: 'الدوري الإيطالي', emblem: 'https://crests.football-data.org/SA.png' },
  { id: 'BL1', name: 'الدوري الألماني', emblem: 'https://crests.football-data.org/BL1.png' },
];

export default function LeaguesNav({ activeLeague }) {
  return (
    <section className="mb-8 bg-green-50/70 border border-green-200/80 p-5 rounded-3xl shadow-sm">
      <h2 className="text-xl font-bold mb-4 text-green-900 flex items-center gap-2">
        <span></span> الدوريات الكبرى 
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {leagues.map((league) => {
          const isActive = activeLeague === league.id;
          return (
            <Link
              key={league.id}
              href={`/?league=${league.id}`}
              className={`p-4 rounded-2xl border text-center transition flex flex-col items-center gap-3 shadow-sm ${
                isActive
                  ? 'bg-green-600 border-green-600 text-white shadow-md ring-4 ring-green-600/20'
                  : 'bg-white border-green-200 text-slate-800 hover:border-green-400 hover:bg-green-50/50'
              }`}
            >
              <img 
                src={league.emblem} 
                alt={league.name} 
                className="w-12 h-12 object-contain drop-shadow-sm" 
              />
              <span className="font-bold text-sm">{league.name}</span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}