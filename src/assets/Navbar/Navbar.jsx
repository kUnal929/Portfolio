
import React, { useState, useEffect } from "react";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close the mobile menu when a link is clicked
  const closeMenu = () => setMenuOpen(false);

  // close the mobile menu if we resize to desktop
  useEffect(() => {
    const onResize = () => window.innerWidth >= 768 && setMenuOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <nav
        className={`w-full text-white transition-all duration-300
        ${isScrolled ? "bg-gray-800/80 backdrop-blur-lg shadow-md" : "bg-gray-800"}`}
      >
        {/* top row */}
        <div className="flex justify-between items-center p-4 tracking-widest">
          <span className="font-bold text-xl">Portfolio</span>

          {/* hamburger */}
          <button
            className="md:hidden block text-2xl focus:outline-none"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            ☰
          </button>

          {/* desktop menu */}
          <ul className="hidden md:flex gap-10 text-xl font-bold">
            <li><a href="#Home" className="hover:text-gray-400 transition-colors">Home</a></li>
            <li><a href="#About" className="hover:text-gray-400 transition-colors">About</a></li>
            <li><a href="#Skills" className="hover:text-gray-400 transition-colors">Skills</a></li>
            <li><a href="#Contact" className="hover:text-gray-400 transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* mobile dropdown (pushes content down) */}
        <div
          className={`md:hidden overflow-hidden transition-[max-height] duration-300
          ${menuOpen ? "max-h-96" : "max-h-0"}`}
        >
          <ul className="flex flex-col gap-4 text-xl font-bold bg-gray-800 p-4 border-t border-gray-700">
            <li><a href="#Home" onClick={closeMenu} className="hover:text-gray-400 transition-colors">Home</a></li>
            <li><a href="#About" onClick={closeMenu} className="hover:text-gray-400 transition-colors">About</a></li>
            <li><a href="#Skills" onClick={closeMenu} className="hover:text-gray-400 transition-colors">Skills</a></li>
            <li><a href="#Contact" onClick={closeMenu} className="hover:text-gray-400 transition-colors">Contact</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
