import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hello, I need to know more about Excape.AI and how to get started.");
    window.open(`https://wa.me/916282638237?text=${message}`, '_blank');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Ecosystem', href: '/#ecosystem' },
    { name: 'How it Works', href: '/#how-it-works' },
    { name: 'Why Us', href: '/#why-us' },
    { name: 'FAQ', href: '/#faq' },
    { name: 'AI Courses', href: '/ai-courses' },
    { name: 'Careers', href: '/careers' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="hover:opacity-80 transition-opacity">
              <img
                src="https://res.cloudinary.com/dwy02zuy2/image/upload/v1767004545/black_svg_qoq6ls.svg"
                alt="Excape.AI"
                className="h-6 w-auto"
              />
            </Link>
          </div>

          <div className="hidden md:flex flex-1 items-center justify-end pr-6 gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm font-medium transition-colors ${link.name === 'Careers' ? 'text-green-600 font-semibold' : 'text-slate-600 hover:text-[#34A853]'}`}
              >
                {link.name}
              </Link>
            ))}

            <div className="relative flex flex-col items-center group mt-1">
              <Link
                to="/web-architect"
                className="text-sm font-semibold text-slate-800 hover:text-[#34A853] transition-colors"
              >
                AI Web Architect Course
              </Link>
              <div className="absolute -bottom-3.5">
                <span className="bg-gradient-to-r from-green-500 to-emerald-400 text-white text-[9px] font-bold uppercase px-1.5 py-0.5 rounded border border-white/50 shadow-sm leading-none block group-hover:-translate-y-0.5 transition-transform tracking-wider">
                  New
                </span>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center ml-4">

            <button
              onClick={openWhatsApp}
              className="bg-[#34A853] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-green-700 transition-all shadow-sm active:scale-95"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-slate-600 p-2 hover:bg-slate-50 rounded-full transition-colors active:scale-90"
            aria-label="Toggle Menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {isMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-[60] md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-slate-900/10 backdrop-blur-[2px]"
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-[70%] bg-white shadow-2xl transition-transform duration-300 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          {/* Close Button Inside Panel */}
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-slate-400 p-2"
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>
          </div>

          <div className="flex flex-col px-8 gap-8 mt-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-[17px] transition-colors ${link.name === 'Careers' ? 'text-green-600 font-bold' : 'font-bold text-slate-700 hover:text-[#34A853]'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            <div className="relative flex flex-col items-start w-fit group">
              <Link
                to="/web-architect"
                onClick={() => setIsMenuOpen(false)}
                className="text-[17px] font-bold text-slate-800 hover:text-[#34A853] transition-colors m-0"
              >
                AI Web Architect Course
              </Link>
              <div className="absolute -bottom-3 right-0">
                <span className="bg-gradient-to-r from-green-500 to-emerald-400 text-white text-[9px] font-bold uppercase px-1.5 py-0.5 rounded border border-white/50 shadow-sm leading-none block tracking-wider">
                  New
                </span>
              </div>
            </div>

            <button
              onClick={() => {
                openWhatsApp();
                setIsMenuOpen(false);
              }}
              className="mt-6 bg-gradient-to-r from-[#4ADE80] to-[#34A853] text-white py-3.5 rounded-full font-bold shadow-[0_8px_20px_-4px_rgba(74,222,128,0.5)] active:scale-95 transition-all text-center text-sm"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
