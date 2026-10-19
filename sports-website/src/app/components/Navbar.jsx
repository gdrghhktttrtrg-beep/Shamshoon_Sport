export default function Navbar() {
  return (
    <header className="bg-slate-800/90 backdrop-blur-md border-b border-slate-700/80 py-4 px-6 flex justify-between items-center shadow-lg sticky top-0 z-50 transition-all">
      <h1 className="text-2xl font-black text-green-400 flex items-center gap-2 tracking-wide cursor-pointer hover:opacity-90 transition">
        ⚽ شمشون سبورت
      </h1>
      <nav className="hidden sm:flex gap-6 text-sm font-medium text-slate-300">
        <a href="#" className="hover:text-green-400 transition-colors duration-200">مباريات اليوم</a>
        <a href="#" className="hover:text-green-400 transition-colors duration-200">النتائج والترتيب</a>
        <a href="#" className="hover:text-green-400 transition-colors duration-200">الهدافين</a>
        <a href="#" className="hover:text-green-400 transition-colors duration-200">الدوريات الكبرى</a>
      </nav>
    </header>
  );
}