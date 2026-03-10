import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen bg-cover bg-center relative flex items-center justify-center text-center"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1495474472287-4d71bcdd2085)",
      }}
    >
      <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/40 to-black/70"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative text-white max-w-xl px-6"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Brew Haven Cafe</h1>

        <p className="mb-8 text-lg text-gray-200">
          Fresh coffee, handmade pastries, and a cozy place to slow down.
        </p>

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#8B5E3C] px-8 py-3 rounded-lg font-medium shadow-lg hover:bg-[#A47148] transition"
        >
          <a href="#menu">View menu</a>
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
