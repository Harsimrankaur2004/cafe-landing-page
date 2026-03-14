const Footer = () => {
  return (
    <footer id="footer" className="bg-[#3d220e] text-white py-14 px-10">
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {/* BRAND */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Brew Haven</h3>

          <p className="text-sm text-[#eeeeee]">
            A cozy neighborhood café serving fresh coffee, delicious pastries,
            and warm moments every day.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>

          <ul className="space-y-2 text-sm text-[#E8D3C5]">
            <li className="lg:hover:text-white cursor-pointer">
              <a href="#home">Home</a>
            </li>

            <li className="lg:hover:text-white cursor-pointer">
              <a href="#menu">Menu</a>
            </li>

            <li className="lg:hover:text-white cursor-pointer">
              <a href="#about">About</a>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div id="contact">
          <h4 className="font-semibold mb-4">Contact</h4>

          <p className="text-sm text-[#E8D3C5] mb-2">123 Coffee Street</p>

          <p className="text-sm text-[#E8D3C5] mb-2">Brew City</p>

          <p className="text-sm text-[#E8D3C5]">hello@brewhaven.com</p>
        </div>
      </div>

      <div className="border-t border-[#8B5E3C] mt-10 pt-6 text-center text-sm text-[#E8D3C5]">
        © 2026 Brew Haven Cafe. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
