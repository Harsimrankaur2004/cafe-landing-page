import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="font-sans bg-[#FDF8F4] text-[#3d220e]">
      <Navbar />
      <main>
        <Hero />
        <Menu />
        <About />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default App;
