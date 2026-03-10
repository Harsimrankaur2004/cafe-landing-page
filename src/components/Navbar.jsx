const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-10 py-5 bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-[#6B3E26]">Brew Haven</h1>

      <ul className="flex gap-8 font-medium max-[620px]:hidden ">
        <li className="cursor-pointer hover:text-[#8B5E3C] transition">
          <a href="#home">Home</a>
        </li>
        <li className="cursor-pointer hover:text-[#8B5E3C] transition">
          <a href="#menu">Menu</a>
        </li>
        <li className="cursor-pointer hover:text-[#8B5E3C] transition">
          <a href="#about">About</a>
        </li>
        <li className="cursor-pointer hover:text-[#8B5E3C] transition">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
