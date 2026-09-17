import { useState } from "react";
import { NavLink } from "react-router-dom";
import NavbarLogo from "./assets/NavbarLogo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#161616]/95 backdrop-blur-xl border-b border-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-20 flex items-center justify-between">
          <NavLink  to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl overflow-hidden group-hover:scale-105 transition">
              <img
                src={NavbarLogo}
                alt="Photography Logo"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col">
              <span className="text-xl font-bold bg-linear-to-r from-white to-neutral-300 bg-clip-text text-transparent">
                عدسة
              </span>

              <span className="text-xs text-orange-400/80 hidden sm:block tracking-wide">
                عالم التصوير الفوتوغرافي
              </span>
            </div>
          </NavLink>

          <div className="hidden md:flex bg-[#161616] rounded-full p-1.5 border border-[#262626]">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-5 py-2.5 rounded-full text-sm transition ${
                  isActive
                    ? "bg-linear-to-r from-orange-500 to-orange-600 text-white"
                    : "text-neutral-400 hover:text-white"
                }`
              }
            >
              الرئيسية
            </NavLink>

            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `px-5 py-2.5 rounded-full text-sm transition ${
                  isActive
                    ? "bg-linear-to-r from-orange-500 to-orange-600 text-white"
                    : "text-neutral-400 hover:text-white"
                }`
              }
            >
              المدونة
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `px-5 py-2.5 rounded-full text-sm transition ${
                  isActive
                    ? "bg-linear-to-r from-orange-500 to-orange-600 text-white"
                    : "text-neutral-400 hover:text-white"
                }`
              }
            >
              من نحن
            </NavLink>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button className="p-3 text-neutral-500 hover:text-orange-500 hover:bg-[#161616] rounded-xl transition">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>

            <NavLink
              className="text-white bg-[#ED5E0E] box-border border border-transparent hover:bg-warning-strong shadow-xs font-medium leading-5 rounded-full text-sm px-5 py-3 focus:outline-none"
              to="/blog"
              data-discover="true"
            >
              ابدأ القراءة
            </NavLink>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-3 text-neutral-400 hover:text-white hover:bg-[#161616] rounded-xl transition border border-transparent hover:border-[#262626]"
          >
            <i
              className={`fa-solid ${open ? "fa-xmark" : "fa-bars"} text-xl`}
            ></i>
          </button>
        </div>

        <div className={`${open ? "block" : "hidden"} md:hidden pb-4`}>
          <div className="bg-[#161616] rounded-2xl p-4 border border-[#262626]">
            <div className="flex flex-col space-y-1">
              <NavLink
                to="/"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl text-sm transition ${
                    isActive
                      ? "bg-orange-500/10 text-orange-500 border border-orange-500/30"
                      : "text-neutral-400 hover:bg-[#1a1a1a] hover:text-white"
                  }`
                }
              >
                الرئيسية
              </NavLink>

              <NavLink
                to="/blog"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl text-sm transition ${
                    isActive
                      ? "bg-orange-500/10 text-orange-500 border border-orange-500/30"
                      : "text-neutral-400 hover:bg-[#1a1a1a] hover:text-white"
                  }`
                }
              >
                المدونة
              </NavLink>

              <NavLink
                to="/about"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl text-sm transition ${
                    isActive
                      ? "bg-orange-500/10 text-orange-500 border border-orange-500/30"
                      : "text-neutral-400 hover:bg-[#1a1a1a] hover:text-white"
                  }`
                }
              >
                من نحن
              </NavLink>

              <NavLink
                to="/blog"
                onClick={() => setOpen(false)}
                className="text-white text-center bg-[#ED5E0E] box-border border border-transparent hover:bg-warning-strong shadow-xs font-medium leading-5 rounded-full text-sm px-5 py-3 focus:outline-none"
              >
                ابدأ القراءة
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
