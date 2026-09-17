import { Link } from "react-router-dom";
import { data } from "./main";

export default function About() {
  return (
    <main className="pt-10">
      <section className="relative min-h-[75vh] flex items-center overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)]  bg-[size:60px_60px]"></div>
        <div className="absolute top-50 left-10 w-72 h-72  bg-[#201209] rounded-full blur-3xl"></div>
        <div className="absolute bottom-50 right-10 w-72 h-72  bg-[#151209] rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  bg-[#160E09] w-96 h-96  rounded-full blur-3xl"></div>
        <div className=" relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-4xl ">
            <div className="mx-auto w-32 bg-[#24160B] px-2.5 py-1.5 flex justify-items-center justify-center gap-2 mb-8 animate-fade-in rounded-full border border-orange-500/30 ">
              <div className=" flex px-1 py-2.5 gap-1.5 justify-items-center justify-center">
                <span className="relative h-2 w-2 rounded-full bg-orange-500 before:absolute before:inset-0 before:rounded-full before:bg-orange-500 before:animate-ping"></span>
                <span className="relative  h-2 w-2 rounded-full bg-orange-500 animate-pulse"></span>
              </div>
              <p className="text-white text-m">من نحن</p>
            </div>
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 ">
                مهمتنا هي{" "}
                <span className="text-[#FB9D1E]">الإعلام والإلهام</span>
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-neutral-400 mb-10 mx-auto">
              مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين
              ونصائح عملية لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة ومساعدة
              المصورين على تنمية مهاراتهم من خلال محتوى عالي الجودة.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              <div
                className="rounded-3xl backdrop-blur-[20px] bg-[#161616]/80 border border-[#262626] p-4 hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: "100ms" }}
              >
                <i className="fa-solid fa-users text-2xl text-orange-500 mb-1"></i>
                <p className="text-2xl md:text-3xl font-bold text-orange-400">
                  +2مليون
                </p>
                <p className="text-neutral-500 text-sm">قارئ شهرياً</p>
              </div>
              <div
                className="rounded-3xl backdrop-blur-[20px] bg-[#161616]/80 border border-[#262626] p-4 hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: "0ms" }}
              >
                <i className="fa-solid fa-newspaper text-2xl text-orange-500 mb-1"></i>
                <p className="text-2xl md:text-3xl font-bold text-orange-400">
                  +500
                </p>
                <p className="text-neutral-500 text-sm">مقالة منشورة</p>
              </div>

              <div
                className="rounded-3xl backdrop-blur-[20px] bg-[#161616]/80 border border-[#262626] p-4 hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: "300ms" }}
              >
                <i className="fa-solid fa-pen-nib text-2xl text-orange-500 mb-1"></i>
                <p className="text-2xl md:text-3xl font-bold text-orange-400">
                  +50
                </p>
                <p className="text-neutral-500 text-sm">كاتب خبير</p>
              </div>
              <div
                className="rounded-3xl backdrop-blur-[20px] bg-[#161616]/80 border border-[#262626] p-4 hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: "200ms" }}
              >
                <i className="fa-solid fa-folder-open text-2xl text-orange-500 mb-1"></i>
                <p className="text-2xl md:text-3xl font-bold text-orange-400">
                  +15
                </p>
                <p className="text-neutral-500 text-sm">تصنيف</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-[#111111] border-y border-[#262626]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
              <span className="w-1.5 h-8 bg-gradient-to-b from-orange-500 to-yellow-500 rounded-full"></span>
              قيمنا
              <span className="w-1.5 h-8 bg-gradient-to-b from-yellow-500 to-orange-500 rounded-full"></span>
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              المبادئ التي توجه كل ما نقوم بإنشائه
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group p-6 bg-[#161616] rounded-2xl border border-[#262626] hover:border-orange-500/30 transition-all duration-300 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

              <div className="relative">
                <i className="fa-solid fa-bullseye text-4xl text-orange-500 mb-4 block"></i>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
                  الجودة أولاً
                </h3>

                <p className="text-neutral-400 text-sm">
                  محتوى مدروس ومكتوب بخبرة
                </p>
              </div>
            </div>

            <div className="group p-6 bg-[#161616] rounded-2xl border border-[#262626] hover:border-orange-500/30 transition-all duration-300 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600 to-orange-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

              <div className="relative">
                <i className="fa-solid fa-bolt text-4xl text-orange-500 mb-4 block"></i>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
                  تركيز عملي
                </h3>

                <p className="text-neutral-400 text-sm">
                  أمثلة واقعية يمكنك تطبيقها اليوم
                </p>
              </div>
            </div>

            <div className="group p-6 bg-[#161616] rounded-2xl border border-[#262626] hover:border-orange-500/30 transition-all duration-300 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

              <div className="relative">
                <i className="fa-solid fa-handshake text-4xl text-orange-500 mb-4 block"></i>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
                  المجتمع
                </h3>

                <p className="text-neutral-400 text-sm">
                  تعلم مع آلاف المصورين
                </p>
              </div>
            </div>

            <div className="group p-6 bg-[#161616] rounded-2xl border border-[#262626] hover:border-orange-500/30 transition-all duration-300 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600 to-orange-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

              <div className="relative">
                <i className="fa-solid fa-arrows-rotate text-4xl text-orange-500 mb-4 block"></i>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
                  دائماً محدث
                </h3>

                <p className="text-neutral-400 text-sm">
                  أحدث الاتجاهات وأفضل الممارسات
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="mx-auto w-24 bg-[#24160B] px-2.5 py-1.5 flex justify-items-center justify-center gap-2 mb-8 animate-fade-in rounded-full border border-orange-500/30 ">
              <div className=" flex px-1 py-2.5 gap-1.5 justify-items-center justify-center">
                <span className="relative  h-2 w-2 rounded-full bg-orange-500 animate-pulse"></span>
              </div>
              <p className="text-white text-m"> فريقنا</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              تعرف على كتابنا
            </h2>
            <p className="text-lg text-neutral-400 max-w-4xl mx-auto">
              فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم مع
              المجتمع.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.posts.map((person)                            => (
              <div key={person.id} className="group bg-[#161616] rounded-2xl p-6 text-center border border-[#262626] hover:border-orange-500/30 transition-all duration-300">
                <div className="relative inline-block mb-4">
                  <img
                    alt={person.author.name}
                    className="w-24 h-24 rounded-full object-cover ring-4 ring-[#262626] group-hover:ring-orange-500/30 transition-all"
                    src={person.author.avatar}
                  />

                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-orange-500 rounded-full border-2 border-[#161616] flex items-center justify-center">
                    <i className="fa-solid fa-check text-xs text-white"></i>
                  </div>
                </div>

                <h3 className="font-bold text-white text-lg">
                  
                  {person.author.name}
                </h3>

                <p className="text-orange-500 text-sm font-medium mb-4">
                  {person.author.role}
                </p>

                <div className="flex justify-center gap-3">
                  <a
                    href={data.siteInfo.social.twitter}
                    className="w-9 h-9 bg-[#262626] rounded-lg flex items-center justify-center text-neutral-500 hover:bg-orange-500 hover:text-white transition-colors"
                  >
                    <i className="fa-brands fa-x-twitter text-sm"></i>
                  </a>

                  <a
                    href={data.siteInfo.social.github}
                    className="w-9 h-9 bg-[#262626] rounded-lg flex items-center justify-center text-neutral-500 hover:bg-neutral-700 hover:text-white transition-colors"
                  >
                    <i className="fa-brands fa-github text-sm"></i>
                  </a>

                  <a
                    href={data.siteInfo.social.linkedin}
                    className="w-9 h-9 bg-[#262626] rounded-lg flex items-center justify-center text-neutral-500 hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    <i className="fa-brands fa-linkedin-in text-sm"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-br from-orange-600 via-orange-500 to-yellow-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 right-10 w-64 h-64 bg-white/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-white/20 rounded-full blur-[80px]"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            لديك أسئلة؟ دعنا نتحدث!
          </h2>

          <p className="text-lg text-white/80 mb-8 max-w-3xl mx-auto">
            نحب أن نسمع منك. سواء كان لديك سؤال حول محتوانا، أو تريد المساهمة،
            أو تريد فقط إلقاء التحية، لا تتردد في التواصل.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to={`mailto:${data.siteInfo.email}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0a0a0a] text-white font-semibold rounded-xl hover:bg-neutral-900 transition-all duration-300 hover:-translate-y-0.5"
            >
              <i className="fa-solid fa-envelope text-lg"></i>
              تواصل معنا
            </Link>

            <Link
              to="/blog"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white/40 text-white font-semibold rounded-xl hover:bg-white hover:text-[#0a0a0a] transition-all duration-300"
            >
              تصفح المقالات
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
