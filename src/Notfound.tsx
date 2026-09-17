import { Link, NavLink } from "react-router-dom";

export default function Notfound() {
  return (
    <main>
      <section className="relative min-h-[100vh] flex items-center overflow-hidden bg-[#0a0a0a]">
        <div
          className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] 
        bg-[size:60px_60px]"
        ></div>
        <div className="absolute top-50 left-10 w-72 h-72  bg-[#201209] rounded-full blur-3xl"></div>
        <div className="absolute bottom-50 right-10 w-72 h-72  bg-[#151209] rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  bg-[#160E09] w-96 h-96  rounded-full blur-3xl"></div>
        <div className=" relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="relative mb-6">
            <h1 className="text-[140px] md:text-[180px] font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 leading-none select-none">
              404
            </h1>
          </div>

          <div className="relative w-28 h-28 mx-auto mb-8">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-full border border-orange-500/30"></div>

            <div className="absolute inset-0 flex items-center justify-center">
              <i className="fa-regular fa-face-frown text-5xl text-orange-500"></i>
            </div>

            <div className="absolute -top-2 -right-2 w-5 h-5 bg-orange-500 rounded-lg rotate-12 animate-bounce"></div>

            <div className="absolute -bottom-1 -left-3 w-4 h-4 bg-yellow-500 rounded-full animate-pulse"></div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            عفواً! الصفحة غير موجودة
          </h2>
          <p className="text-neutral-400 mb-8 text-lg">
            الصفحة التي تبحث عنها غير موجودة أو تم نقلها. دعنا نعيدك إلى المسار
            الصحيح.
          </p>
          <div className="flex flex-col sm:flex-row justify-center  gap-4 mb-16 ">
            <NavLink
              to="/blog"
              className="text-white bg-orange-500 box-border border border-transparent shadow-xs font-medium rounded-full text-lg px-4 py-2.5 flex gap-2 items-center justify-center group hover:-translate-y-2 transition-all duration-300 "
            >
              <span> الذهاب للرئيسية</span>
              <i className="fa-solid fa-arrow-left-long group-hover:-translate-x-1 transition-all duration-300"></i>
            </NavLink>
            <NavLink
              to="/about"
              className="text-white bg-transparent box-border border border-gray-700 shadow-xs font-medium rounded-full text-lg px-4 py-2.5 flex gap-2 items-center justify-center group hover:text-orange-500 hover:bg-orange-500/10 hover:border-orange-500  transition-all duration-300 "
            >
              <i className="fa-solid fa-circle-exclamation text-white group-hover:text-orange-500 transition-all duration-300"></i>
              <span className="text-center"> تصفح المقالات</span>
            </NavLink>
          </div>
          <hr className=" border-gray-800 " />
          <div className="pt-8 border-t border-[#262626]">
            <p className="text-sm text-neutral-500 mb-4">قد تجد هذه مفيدة:</p>

            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link
                className="text-orange-500 hover:text-orange-400 hover:underline font-medium"
                to="/blog"
              >
                المدونة
              </Link>

              <span className="text-neutral-600">•</span>

              <Link
                className="text-orange-500 hover:text-orange-400 hover:underline font-medium"
                to="/about"
              >
                من نحن
              </Link>

              <span className="text-neutral-600">•</span>

              <Link
                className="text-orange-500 hover:text-orange-400 hover:underline font-medium"
                to="/privacy"
              >
                الخصوصية
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
