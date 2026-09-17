import { useState } from "react";
import { data } from "./main";
import { Link } from "react-router-dom";

export default function Blog() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("الكل");
  const filteredPosts = data.posts.filter((post) => {
    const matchSearch = post.title.toLowerCase().includes(search.toLowerCase());

    const matchCategory = category === "الكل" || post.category === category;

    return matchSearch && matchCategory;
  });
  const [currentPage, setCurrentPage] = useState(1);

  const postsPerPage: number = 6;

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const startIndex = (currentPage - 1) * postsPerPage;

  const currentPosts = filteredPosts.slice(
    startIndex,
    startIndex + postsPerPage,
  );
  return (
    <main className=" pt-20">
      <div className="min-h-screen bg-[#0a0a0a]">
        <section className="relative flex items-center overflow-hidden bg-[#0a0a0a]">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
          </div>
          <div className=" relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center max-w-4xl ">
              <div className="mx-auto w-36 bg-[#24160B] px-2.5 py-1.5 flex justify-items-center justify-center gap-2 mb-8 animate-fade-in rounded-full border border-orange-500/30 items-center ">
                <div className=" flex px-1 py-2.5 gap-1.5 justify-items-center justify-center items-center">
                  <span className="relative  h-2 w-2 rounded-full bg-orange-500 animate-pulse"></span>
                </div>
                <i className="fa-solid fa-book text-orange-500"></i>
                <p className="text-orange-500 text-m">مدونتنا</p>
              </div>
              <div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 ">
                  استكشف <span className="text-[#FB9D1E]"> مقالاتنا</span>
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-neutral-400 mb-10 mx-auto">
                اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
              </p>
            </div>
          </div>
        </section>
        <section className="sticky top-20 z-40 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-[#262626]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="relative md:w-80">
                <input
                  type="text"
                  placeholder="ابحث في المقالات..."
                  className="transition-all  w-full rounded-3xl duration-300 outline-none bg-[#161616] border border-[#262626] text-white  px-5 py-3 pr-12 focus:border-orange-600"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setCurrentPage(1);
                  }}
                />

                <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500"></i>
              </div>

              <div className="flex flex-wrap justify-center gap-2">
                <button
                  onClick={() => {
                    setCategory("الكل");
                    setCurrentPage(1);
                  }}
                  className={`px-4 py-2 rounded-xl text-sm font-medium ${
                    category === "الكل"
                      ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white"
                      : "bg-[#161616] text-neutral-400 border border-[#262626]"
                  }`}
                >
                  جميع المقالات
                </button>

                {data.categories.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => {
                      setCategory(item.name);
                      setCurrentPage(1);
                    }}
                    className={`px-4 py-2 rounded-xl text-sm font-medium ${
                      category === item.name
                        ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white"
                        : "bg-[#161616] text-neutral-400 border border-[#262626]"
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ">                                             
          <div className="mb-8 flex items-center justify-between">
            <p className="text-neutral-400">
              عرض <span className="font-bold text-white">28</span> مقالات
            </p>

            <div className="flex items-center gap-2">
              <div className="flex items-center bg-[#161616] border border-[#262626] rounded-xl p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === "grid"
                      ? "bg-orange-500 text-white"
                      : "text-neutral-400 hover:text-white"
                  }`}
                  title="عرض شبكي"
                >
                  <i className="fa-solid fa-grip text-lg"></i>
                </button>

                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === "list"
                      ? "bg-orange-500 text-white"
                      : "text-neutral-400 hover:text-white"
                  }`}
                  title="عرض قائمة"
                >
                  <i className="fa-solid fa-bars text-lg"></i>
                </button>
              </div>
            </div>
          </div>
          <div
            className={
              viewMode === "grid"
                ? "grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                : "flex flex-col gap-6"
            }
          >
            {currentPosts.map((post) => (
              <div
                key={post.id}
                className="group relative bg-[#161616] rounded-3xl overflow-hidden border border-[#262626] hover:border-orange-500/30 transition-all duration-500"
              >
                <Link  to={`/blog/${post.slug}`}>
                  <div
                    className={
                      viewMode === "list"
                        ? "grid md:grid-cols-[320px_1fr] w-full"
                        : "flex flex-col"
                    }
                  >
                    <div
                      className={
                        viewMode === "list"
                          ? "relative w-full h-52 md:h-auto overflow-hidden"
                          : "relative h-52 overflow-hidden"
                      }
                    >
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      />

                      {viewMode === "list" ? (
                        " "
                      ) : (
                        <div className="absolute top-4 right-4">
                          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#131312] text-white text-xs font-semibold rounded-full">
                            <span>{post.category}</span>
                          </div>
                        </div>
                      )}
                    </div>

                    <div
                      className={
                        viewMode === "list"
                          ? "flex-1 p-6 flex flex-col justify-center"
                          : "p-8 md:p-10 flex flex-col justify-center bg-[#161616]"
                      }
                    >
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

                      <hr
                        className={
                          viewMode === "list"
                            ? " opacity-0"
                            : "border-[#262626]"
                        }
                      />

                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center gap-3">
                          <div className="relative">
                            <img
                              src={post.author.avatar}
                              alt={post.author.name}
                              className="w-12 h-12 rounded-full object-cover ring-2 ring-[#262626] shadow-md"
                            />
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
                        {viewMode === "list" ? (
                          <span className="inline-flex items-center gap-2 text-orange-500 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                            اقرأ المقال
                            <i className="fa-solid fa-arrow-left-long"></i>
                          </span>
                        ) : (
                          <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
                            <i className="fa-solid fa-angle-left text-orange-500 group-hover:text-white transition-colors duration-300"></i>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center gap-2 mt-12">
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
              className={`p-3 rounded-xl border transition-all duration-300 ${
                currentPage === 1
                  ? "bg-[#0a0a0a] border-[#262626] text-neutral-600 cursor-not-allowed"
                  : "bg-[#161616] border-[#262626] text-white hover:border-orange-500/50 hover:bg-[#1a1a1a]"
              }`}
            >
              <i className="fa-solid fa-chevron-right"></i>
            </button>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`min-w-[44px] h-11 rounded-xl ${
                    currentPage === page
                      ? "bg-orange-500 text-white"
                      : "bg-[#161616] text-neutral-400 border border-[#262626]"
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`p-3 rounded-xl border transition-all duration-300 ${
                currentPage === totalPages
                  ? "bg-[#0a0a0a] border-[#262626] text-neutral-600 cursor-not-allowed"
                  : "bg-[#161616] border-[#262626] text-white hover:border-orange-500/50 hover:bg-[#1a1a1a]"
              }`}
            >
              <i className="fa-solid fa-chevron-left"></i>
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
