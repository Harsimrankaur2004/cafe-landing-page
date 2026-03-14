import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Menu", href: "#menu" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="backdrop-blur-md shadow-sm sticky top-0 z-50 bg-white/80">
      <nav className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-5 md:py-6 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-[#6B3E26]">Brew Haven</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium">
          {navLinks.map((link) => (
            <li
              key={link.href}
              className="cursor-pointer lg:hover:text-[#8B5E3C] transition-colors duration-200"
            >
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8 relative"
          onClick={() => setOpen(!open)}
        >
          <span
            className={`block w-6 h-0.5 bg-[#8B5E3C] rounded-full transition-all duration-300 ease-in-out
      ${open ? "rotate-45 translate-y-2" : ""}`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-[#8B5E3C] rounded-full transition-all duration-300 ease-in-out
      ${open ? "opacity-0" : ""}`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-[#8B5E3C] rounded-full transition-all duration-300 ease-in-out
      ${open ? "-rotate-45 -translate-y-2" : ""}`}
          ></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-8 py-6 flex flex-col gap-5 text-lg">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="cursor-pointer lg:hover:text-[#8B5E3C] transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
