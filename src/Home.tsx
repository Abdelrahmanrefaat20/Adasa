import { Link, NavLink } from "react-router-dom";
import { data } from "./main.tsx";
export default function Home() {
  return (
    <main className="pt-10">
      <section className="relative min-h-[100vh] flex items-center overflow-hidden bg-[#0a0a0a]">
        <div
          className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] 
        bg-[size:60px_60px]"
        ></div>
        <div className="absolute top-50 left-10 w-72 h-72  bg-[#201209] rounded-full blur-3xl"></div>
        <div className="absolute bottom-50 right-10 w-72 h-72  bg-[#151209] rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  bg-[#160E09] w-96 h-96  rounded-full blur-3xl"></div>
        <div className=" relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-4xl ">
            <div className="mx-auto w-48 bg-[#24160B] px-2.5 py-1.5 flex justify-items-center justify-center gap-2 mb-8 animate-fade-in rounded-full border border-orange-500/30 ">
              <div className=" flex px-1 py-2.5 gap-1.5 justify-items-center justify-center">
                <span className="relative h-2 w-2 rounded-full bg-orange-500 before:absolute before:inset-0 before:rounded-full before:bg-orange-500 before:animate-ping"></span>
                <span className="relative  h-2 w-2 rounded-full bg-orange-500 animate-pulse"></span>
              </div>
              <p className="text-white text-m">مرحباً بك في عدسة</p>
            </div>
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 ">
                اكتشف <span className="text-[#FB9D1E]">فن</span>
                <br />
                التصوير الفوتوغرافي
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-neutral-400 mb-10 mx-auto">
              انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
            </p>

            <div className="flex flex-col sm:flex-row justify-center  gap-4 mb-16 ">
              <NavLink
                to="/blog"
                className="text-white bg-orange-500 box-border border border-transparent shadow-xs font-medium rounded-full text-lg px-4 py-2.5 flex gap-2 items-center justify-center group hover:-translate-y-2 transition-all duration-300 "
              >
                <span>استكشف المقالات</span>
                <i className="fa-solid fa-arrow-left-long group-hover:-translate-x-1 transition-all duration-300"></i>
              </NavLink>
              <NavLink
                to="/about"
                className="text-white bg-transparent box-border border border-gray-700 shadow-xs font-medium rounded-full text-lg px-4 py-2.5 flex gap-2 items-center justify-center group hover:text-orange-500 hover:bg-orange-500/10 hover:border-orange-500  transition-all duration-300 "
              >
                <i className="fa-solid fa-circle-exclamation text-white group-hover:text-orange-500 transition-all duration-300"></i>
                <span className="text-center">اعرف المزيد</span>
              </NavLink>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              <div
                className="rounded-3xl backdrop-blur-[20px] bg-[#161616]/80 border border-[#262626] p-4 hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: "0ms" }}
              >
                <i className="fa-solid fa-newspaper text-2xl text-orange-500 mb-1"></i>
                <p className="text-2xl md:text-3xl font-bold text-orange-400">
                  +50
                </p>
                <p className="text-neutral-500 text-sm">مقالة</p>
              </div>

              <div
                className="rounded-3xl backdrop-blur-[20px] bg-[#161616]/80 border border-[#262626] p-4 hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: "100ms" }}
              >
                <i className="fa-solid fa-users text-2xl text-orange-500 mb-1"></i>
                <p className="text-2xl md:text-3xl font-bold text-orange-400">
                  +10ألف
                </p>
                <p className="text-neutral-500 text-sm">قارئ</p>
              </div>

              <div
                className="rounded-3xl backdrop-blur-[20px] bg-[#161616]/80 border border-[#262626] p-4 hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: "200ms" }}
              >
                <i className="fa-solid fa-folder-open text-2xl text-orange-500 mb-1"></i>
                <p className="text-2xl md:text-3xl font-bold text-orange-400">
                  4
                </p>
                <p className="text-neutral-500 text-sm">تصنيفات</p>
              </div>

              <div
                className="rounded-3xl backdrop-blur-[20px] bg-[#161616]/80 border border-[#262626] p-4 hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: "300ms" }}
              >
                <i className="fa-solid fa-pen-nib text-2xl text-orange-500 mb-1"></i>
                <p className="text-2xl md:text-3xl font-bold text-orange-400">
                  6
                </p>
                <p className="text-neutral-500 text-sm">كاتب</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-[#0a0a0a] relative overflow-hidden min-h-[100vh]">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-orange-500/5 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <div className=" w-24 bg-[#24160B] px-2.5 py-1.5 flex gap-2 mb-8 animate-fade-in rounded-full border border-orange-500/30 me-0">
                <div className=" flex px-1 py-2.5 gap-1.5 justify-items-center justify-center">
                  <span className="relative h-2 w-2 rounded-full bg-orange-500 before:absolute before:inset-0 before:rounded-full before:bg-orange-500 before:animate-ping"></span>
                  <span className="relative  h-2 w-2 rounded-full bg-orange-500 animate-pulse"></span>
                </div>
                <p className="text-white text-m"> مميز</p>
              </div>
              <h2 className=" text-4xl leading-tight font-bold text-white">
                مقالات مختارة
              </h2>
              <p className="text-lg leading-relaxed text-neutral-400">
                محتوى منتقى لبدء رحلة تعلمك
              </p>
            </div>
            <NavLink
              className="group flex items-center self-end gap-2 px-5 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-medium transition-all duration-300 hover:-translate-y-0.5"
              to="/blog"
              data-discover="true"
            >
              عرض الكل<i className="fa-solid fa-chevron-left"></i>
            </NavLink>
          </div>
          <div className="space-y-7">
            {data.posts
              .filter((post) => post.featured)
              .slice(0, 3)
              .map((post) => (
                <div
                  key={post.id}
                  className="group relative bg-[#161616] rounded-3xl overflow-hidden border border-[#262626] hover:border-orange-500/30 transition-all duration-500 "
                >
                  <Link to={`/blog/${post.slug}`}>
                    <div className="grid md:grid-cols-2 ">
                      <div className=" relative h-72 md:h-96 overflow-hidden ">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute top-4 right-4  ">
                          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-orange-500 to-yellow-500 text-white text-xs font-semibold rounded-full">
                            <i className="fa-solid fa-star text-white"></i>
                            <span className="">مميز</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-8 md:p-10 flex flex-col justify-center bg-[#161616]">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="px-3 py-1 bg-orange-500/10 text-orange-500 text-xs font-semibold rounded-full border border-orange-500/20">
                            {post.category}
                          </span>

                          <span className="flex items-center gap-1 text-sm text-neutral-500">
                            <i className="fa-regular fa-clock"></i>
                            {post.readTime}
                          </span>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-orange-500 transition-colors duration-300 ">
                          {post.title}
                        </h2>
                        <p className="text-neutral-400 mb-6">{post.excerpt}</p>
                        <div className="flex items-center justify-between mt-auto">
                          <div className="flex items-center gap-3">
                            <div className=" relative">
                              <img
                                src={post.author.avatar}
                                alt={post.author.name}
                                className="w-12 h-12 rounded-full object-cover ring-2 ring-[#262626] shadow-md"
                              />
                              <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-orange-500 rounded-full border-2 border-[#161616]"></div>
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-white">
                                {post.author.name}
                              </p>
                              <p className="text-xs text-neutral-500">
                                {post.date}
                              </p>
                            </div>
                          </div>

                          <span className="inline-flex items-center gap-2 text-orange-500 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                            اقرأ المقال
                            <i className="fa-solid fa-arrow-left-long"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-[#111111] relative border-y border-[#262626]">
        <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className=" w-34 mx-auto bg-[#24160B] px-2.5 py-1.5 flex gap-2 mb-8 animate-fade-in rounded-full border border-orange-500/30 me-0">
              <div className=" flex px-1 py-2.5 gap-1.5 justify-items-center justify-center">
                <span className="relative h-2 w-2 rounded-full bg-orange-500 before:absolute before:inset-0 before:rounded-full before:bg-orange-500 before:animate-ping"></span>
                <span className="relative  h-2 w-2 rounded-full bg-orange-500 animate-pulse"></span>
              </div>
              <p className="text-white text-m"> التصنيفات</p>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              استكشف حسب الموضوع
            </h2>
            <p className="text-xl md:text-2xl text-neutral-400 mb-10  max-w-lg mx-auto">
              اعثر على محتوى مصمم حسب اهتماماتك
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {data.categories.map((category) => (
              <NavLink
                key={category.name}
                className="group relative block p-6 rounded-2xl bg-[#161616] border border-[#262626] overflow-hidden hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-1"
                to={`/blog?category=${encodeURIComponent(category.name)}`}
                data-discover="true"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
                    <i
                      className={`fa-solid ${category.icon} text-xl text-orange-500 group-hover:text-white transition-colors duration-300`}
                    ></i>
                  </div>
                  <h3 className="font-bold text-lg text-white group-hover:text-white transition-colors duration-300 mb-1">
                    {category.name}{" "}
                  </h3>
                  <p className="text-sm text-neutral-500 group-hover:text-white/80 transition-colors duration-300">
                    {category.count} مقالة
                  </p>
                  <div className="absolute top-6 left-6 w-8 h-8 rounded-full bg-[#262626] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-white/20 transition-all duration-300">
                    <i className="fa-solid fa-angle-left text-white"></i>{" "}
                  </div>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-orange-500/5 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <div className=" w-28 bg-[#24160B] px-2.5 py-1.5 flex gap-2 mb-8 animate-fade-in rounded-full border border-orange-500/30 me-0">
                <div className=" flex px-1 py-2.5 gap-1.5 justify-items-center justify-center">
                  <span className="relative h-2 w-2 rounded-full bg-orange-500 before:absolute before:inset-0 before:rounded-full before:bg-orange-500 before:animate-ping"></span>
                  <span className="relative  h-2 w-2 rounded-full bg-orange-500 animate-pulse"></span>
                </div>
                <p className="text-white text-m"> الأحدث</p>
              </div>
              <h2 className=" text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 ">
                أحدث المقالات
              </h2>
              <p className="text-lg leading-relaxed text-neutral-400">
                محتوى جديد طازج من المطبعة
              </p>
            </div>
            <NavLink
              className="group flex items-center self-end gap-2 px-5 py-2.5  transition-all duration-300 hover:-translate-x-0.5"
              to="/blog"
              data-discover="true"
            >
              <span className="flex items-center gap-2 text-orange-500 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                عرض جميع المقالات
                <i className="fa-solid fa-arrow-left-long"></i>
              </span>
            </NavLink>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.posts.slice(3, 6).map((post) => (
              <div
                key={post.id}
                className="group relative bg-[#161616] rounded-3xl overflow-hidden border border-[#262626] hover:border-orange-500/30 transition-all duration-500 "
              >
                <a href="/blog/{id}" data-discover="true">
                  <div className="grid ">
                    <div className=" relative h-52 overflow-hidden ">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute top-4 right-4  ">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#131312] text-white text-xs font-semibold rounded-full">
                          <span className="">تقنيات</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-8 md:p-10 flex flex-col justify-center bg-[#161616]">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-orange-500/10 text-orange-500 text-xs font-semibold rounded-full border border-orange-500/20">
                          {post.category}
                        </span>

                        <span className="flex items-center gap-1 text-sm text-neutral-500">
                          <i className="fa-regular fa-clock"></i>
                          {post.readTime}
                        </span>
                      </div>
                      <h2 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2 leading-tight">
                        {post.title}
                      </h2>
                      <p className="text-neutral-400 mb-6">{post.excerpt}</p>
                      <hr />
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-3">
                          <div className=" relative">
                            <img
                              src={post.author.avatar}
                              alt={post.author.name}
                              className="w-12 h-12 rounded-full object-cover ring-2 ring-[#262626] shadow-md"
                            />
                            <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-orange-500 rounded-full border-2 border-[#161616]"></div>
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-white">
                              {post.author.name}
                            </p>
                            <p className="text-xs text-neutral-500 mt-0.5">
                              {post.author.role}
                            </p>
                          </div>
                        </div>

                        <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
                          <i className="fa-solid fa-angle-left text-orange-500 group-hover:text-white transition-colors duration-300 "></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 relative overflow-hidden bg-[#0a0a0a]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2   w-96 h-48 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-[#161616] rounded-3xl border border-[#262626] p-8 md:p-12 lg:p-16 text-center ">
            <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <i className="fa-regular fa-envelope text-2xl text-white"></i>
            </div>

            <h2 className="relative z-10 text-3xl md:text-4xl font-bold text-white mb-4">
              اشترك في <span className="gradient-text">نشرتنا الإخبارية</span>
            </h2>
            <p className="relative z-10 text-neutral-400 text-lg mb-8 max-w-xl mx-auto">
              احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك
              الإلكتروني
            </p>

            <form className="relative z-10 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto mb-6">
              <input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                className="flex-1 px-5 py-4 rounded-xl bg-[#0a0a0a] border border-[#262626] focus:outline-none focus:border-orange-500/50 text-white placeholder-neutral-500 transition-colors"
              />

              <button
                type="submit"
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300"
              >
                اشترك الآن
              </button>
            </form>

            <div className="relative z-10 flex flex-wrap items-center justify-center gap-4 text-sm text-neutral-500">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2 space-x-reverse">
                  {data.posts.slice(0, 3).map((post) => (
                    <img
                      className="w-8 h-8 rounded-full border-2 border-[#161616]"
                      alt={post.author.name}
                      src={post.author.avatar}
                    />
                  ))}
                </div>

                <span>
                  انضم لـ
                  <span className="text-white font-medium">+10,000</span>
                  مصور
                </span>
              </div>

              <span className="hidden sm:inline text-[#262626]">•</span>

              <span>بدون إزعاج</span>

              <span className="hidden sm:inline text-[#262626]">•</span>

              <span>إلغاء الاشتراك في أي وقت</span>
            </div>

            <div className="absolute top-0 left-1/2 -translate-x-1/2  w-96 h-48 bg-orange-500/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>
    </main>
  );
}
