export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-white/5">

      {/* Yellow bottom stripe */}
      <div className="max-w-7xl mx-auto px-8 md:px-16 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <a href="#" className="flex items-baseline gap-1">
            <span className="text-sky-400 text-2xl font-black italic uppercase tracking-tight">MIRACLE</span>
            <span className="text-white text-2xl font-black italic uppercase tracking-tight">BJJ</span>
          </a>

          <div className="flex flex-wrap gap-x-10 gap-y-2">
            {["특징", "일정", "가격", "네트워킹", "체험 신청"].map((item, i) => (
              <a
                key={i}
                href={`#${["features", "schedule", "pricing", "join", "contact"][i]}`}
                className="text-[10px] font-black uppercase tracking-widest text-gray-600 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-white/5 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-700 text-[10px] uppercase tracking-widest">
            © 2025 MIRACLE BJJ. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-gray-700 font-bold">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
            현재 체험 신청 가능
          </div>
        </div>
      </div>

      <div className="h-[3px] bg-sky-400 w-full" />
    </footer>
  );
}
