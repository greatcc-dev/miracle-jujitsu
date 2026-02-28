export default function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-900 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-yellow-400 text-xl font-black">미라클</span>
              <span className="text-white text-xl font-black">주짓수</span>
            </div>
            <p className="text-gray-600 text-sm">
              아침 8시, 하루를 바꾸는 주짓수 클래스
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-16 gap-y-2 text-sm">
            <a href="#features" className="text-gray-600 hover:text-gray-300 transition-colors">특징</a>
            <a href="#schedule" className="text-gray-600 hover:text-gray-300 transition-colors">일정</a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-300 transition-colors">가격</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-300 transition-colors">신청</a>
          </div>
        </div>

        <div className="border-t border-zinc-900 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-700 text-xs">
            © 2025 미라클 주짓수. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-xs text-gray-700">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            현재 체험 신청 가능
          </div>
        </div>
      </div>
    </footer>
  );
}
