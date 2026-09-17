import { NavLink } from "react-router-dom";
import { data } from "./main";

export default function Footer() {
  return (
    <footer className="relative bg-[#0a0a0a] text-neutral-300 overflow-hidden border-t border-[#262626]">
       <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

           <div className="lg:col-span-1">
            <NavLink
              to="/"
              className="flex items-center gap-3 mb-6 group"
            >
              <div
                className="w-11 h-11 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-all duration-300"
                style={{
                  boxShadow: "rgba(249, 115, 22, 0.3) 0px 4px 20px",
                }}
              >
                <span className="text-white font-bold text-xl">ع</span>
              </div>

              <span className="text-xl font-bold text-white">
                عدسة
              </span>
            </NavLink>

            <p className="text-sm text-neutral-500 mb-6 leading-relaxed">
              مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار
              المحترفين ونصائح عملية لتطوير مهاراتكم.
            </p>

             
            <div className="flex gap-2">
              <a
                href={data.siteInfo.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#161616] border border-[#262626] hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-600 hover:border-transparent rounded-xl flex items-center justify-center text-neutral-500 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <i className="fa-brands fa-x-twitter"></i>
              </a>

              <a
                href={data.siteInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#161616] border border-[#262626] hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-600 hover:border-transparent rounded-xl flex items-center justify-center text-neutral-500 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <i className="fa-brands fa-github"></i>
              </a>

              <a
                href={data.siteInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#161616] border border-[#262626] hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-600 hover:border-transparent rounded-xl flex items-center justify-center text-neutral-500 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>

              <a
                href={data.siteInfo.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#161616] border border-[#262626] hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-600 hover:border-transparent rounded-xl flex items-center justify-center text-neutral-500 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="YouTube"
              >
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>

       
          <div>
            <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full"></span>
              استكشف
            </h3>

            <ul className="space-y-4">
              <li>
                <NavLink
                  to="/"
                  className="text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group"
                >
                  <i className="fa-solid fa-chevron-left w-4 opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500"></i>
                  الرئيسية
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/blog"
                  className="text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group"
                >
                  <i className="fa-solid fa-chevron-left w-4 opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500"></i>
                  المدونة
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/about"
                  className="text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group"
                >
                  <i className="fa-solid fa-chevron-left w-4 opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500"></i>
                  من نحن
                </NavLink>
              </li>
            </ul>
          </div>

       
          <div>
            <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full"></span>
              التصنيفات
            </h3>

            <ul className="space-y-4">
                {data.categories.map((category)=>(
                     <li key={category.name}>
                <NavLink
               to={`/blog?category=${encodeURIComponent(category.name)}`}

                  className="text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group"
                >
                  <i className="fa-solid fa-chevron-left w-4 opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500"></i>
                  {category.name}
                </NavLink>
              </li>
                ))}
             
            </ul>
          </div>

          
          <div>
            <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full"></span>
              ابقى على اطلاع
            </h3>

            <p className="text-sm text-neutral-500 mb-4">
              اشترك للحصول على أحدث المقالات والتحديثات.
            </p>

            <form className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="أدخل بريدك الإلكتروني"
                  className="w-full px-4 py-3 bg-[#161616] border border-[#262626] rounded-xl text-sm text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all duration-300 placeholder-neutral-600"
                />
              </div>

              <button
                type="submit"
                className="w-full text-white bg-[#ED5E0E] box-border border border-transparent hover:bg-warning-strong shadow-xs font-medium leading-5 rounded-full  px-5 py-3 focus:outline-none text-sm"
              >
                اشترك
              </button>
            </form>
          </div>
        </div>
      </div>

      
      <div className="relative border-t border-[#262626]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">

            <p className="text-sm text-neutral-600">
              © 2026 عدسة. صنع بكل{" "}
              <i className="fa-solid fa-heart text-orange-500"></i>{" "}
              جميع الحقوق محفوظة.
            </p>

            <div className="flex gap-6">
              <NavLink
                to="/privacy"
                className="text-sm text-neutral-600 hover:text-orange-500 transition-colors duration-300"
              >
                سياسة الخصوصية
              </NavLink>

              <NavLink
                to="/terms"
                className="text-sm text-neutral-600 hover:text-orange-500 transition-colors duration-300"
              >
                شروط الخدمة
              </NavLink>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}