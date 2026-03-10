import { motion } from "framer-motion";

const Testimonials = () => {
   const reviews = [
    {
      name: "Emma",
      text: "The coffee is amazing and the atmosphere is super cozy.",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Daniel",
      text: "Best cappuccino I've had in a long time.",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Sophia",
      text: "Great pastries and friendly staff. Highly recommend!",
      img: "https://randomuser.me/api/portraits/women/68.jpg",
    },
  ];

  return (
    <section className="py-24 px-8 text-center bg-[#EADDD2]">
        
        <h2 className="text-4xl font-bold mb-14 text-[#6B3E26]">
          What Customers Say
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-xl shadow-md"
            >
              <img
                src={review.img}
                className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
              />

              <div className="text-yellow-400 mb-3">⭐⭐⭐⭐⭐</div>

              <p className="text-gray-600 mb-4 italic">"{review.text}"</p>

              <h4 className="font-semibold">{review.name}</h4>
            </motion.div>
          ))}
        </div>
      </section>
  )
}

export default Testimonials
