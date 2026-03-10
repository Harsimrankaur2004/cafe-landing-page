import { motion } from "framer-motion";

const About = () => {
  return (
      <section id="about" className="py-28 px-10 bg-[#F5EDE6]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* IMAGES */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <img
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24"
              className="rounded-xl h-60 object-cover shadow-lg"
            />

            <img
              src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb"
              className="rounded-xl h-60 object-cover shadow-lg mt-10"
            />
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-[#5C3A21] mb-6">
              Crafted Coffee. Cozy Moments.
            </h2>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Brew Haven began with a simple idea — create a place where people
              can slow down and enjoy truly great coffee. Every cup we serve
              comes from carefully selected beans roasted to bring out their
              natural flavor and aroma.
            </p>

            <p className="text-gray-700 mb-10 leading-relaxed">
              Whether you're meeting friends, working on your laptop, or just
              taking a quiet break, our café is designed to feel warm,
              welcoming, and full of life.
            </p>

            {/* FEATURES */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-lg shadow">
                <h4 className="font-semibold text-[#5C3A21] mb-1">
                  ☕ Freshly Brewed
                </h4>
                <p className="text-sm text-gray-600">
                  Beans roasted weekly for rich flavor.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg shadow">
                <h4 className="font-semibold text-[#5C3A21] mb-1">
                  🥐 Handmade Pastries
                </h4>
                <p className="text-sm text-gray-600">
                  Fresh baked treats every morning.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg shadow">
                <h4 className="font-semibold text-[#5C3A21] mb-1">
                  🌿 Relaxing Space
                </h4>
                <p className="text-sm text-gray-600">
                  Comfortable and peaceful environment.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg shadow">
                <h4 className="font-semibold text-[#5C3A21] mb-1">
                  ⭐ Local Favorite
                </h4>
                <p className="text-sm text-gray-600">
                  Loved by coffee enthusiasts.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

  )
}

export default About
