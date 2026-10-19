export default function Leagues() {
  return (
    <section>
      <h2 className="text-xl font-bold mb-5 border-r-4 border-green-400 pr-3 flex items-center justify-between">
        الدوريات الكبرى
        <span className="text-xs text-slate-400 font-normal">اختر البطولات المفضلة لديك</span>
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-slate-800/80 backdrop-blur p-5 rounded-2xl text-center border border-slate-700/80 hover:border-green-400 hover:scale-105 hover:shadow-green-500/10 hover:shadow-2xl cursor-pointer transition-all duration-300 group">
          <span className="text-4xl block group-hover:scale-110 transition-transform duration-300">🏴󠁧󠁢󠁥󠁮󠁧󠁿</span>
          <p className="mt-3 font-bold text-sm text-slate-200 group-hover:text-green-400 transition-colors">الدوري الإنجليزي</p>
        </div>
        <div className="bg-slate-800/80 backdrop-blur p-5 rounded-2xl text-center border border-slate-700/80 hover:border-green-400 hover:scale-105 hover:shadow-green-500/10 hover:shadow-2xl cursor-pointer transition-all duration-300 group">
          <span className="text-4xl block group-hover:scale-110 transition-transform duration-300">🇪🇸</span>
          <p className="mt-3 font-bold text-sm text-slate-200 group-hover:text-green-400 transition-colors">الدوري الإسباني</p>
        </div>
        <div className="bg-slate-800/80 backdrop-blur p-5 rounded-2xl text-center border border-slate-700/80 hover:border-green-400 hover:scale-105 hover:shadow-green-500/10 hover:shadow-2xl cursor-pointer transition-all duration-300 group">
          <span className="text-4xl block group-hover:scale-110 transition-transform duration-300">🇮🇹</span>
          <p className="mt-3 font-bold text-sm text-slate-200 group-hover:text-green-400 transition-colors">الدوري الإيطالي</p>
        </div>
        <div className="bg-slate-800/80 backdrop-blur p-5 rounded-2xl text-center border border-slate-700/80 hover:border-green-400 hover:scale-105 hover:shadow-green-500/10 hover:shadow-2xl cursor-pointer transition-all duration-300 group">
          <span className="text-4xl block group-hover:scale-110 transition-transform duration-300">🇩🇪</span>
          <p className="mt-3 font-bold text-sm text-slate-200 group-hover:text-green-400 transition-colors">الدوري الألماني</p>
        </div>
      </div>
    </section>
  );
}