import { motion } from "framer-motion";
import { useState } from "react";

const Menu = () => {
  const [visibleItems, setVisibleItems] = useState(3);
  const menu = [
    {
      name: "Cappuccino",
      price: "$4",
      img: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38",
    },
    {
      name: "Caramel Latte",
      price: "$5",
      img: "https://www.forkinthekitchen.com/wp-content/uploads/2022/06/220518.homemade.caramel.latte-6630-1200x1200.jpg",
    },
    {
      name: "Espresso",
      price: "$3",
      img: "https://merriam-webster.com/assets/mw/images/article/art-wap-article-main/alt-59554682a1f2e-3889-dde94090d7b467da73a3e89fa6714f7f@2x.jpg",
    },
    {
      name: "Mocha",
      price: "$4.5",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Mocha_coffee.jpg/500px-Mocha_coffee.jpg",
    },
    {
      name: "Iced Coffee",
      price: "$4",
      img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735",
    },
    {
      name: "Vanilla Latte",
      price: "$5",
      img: "https://www.forkinthekitchen.com/wp-content/uploads/2022/06/220518.vanilla.latte-6410-1200x1200.jpg",
    },
    {
      name: "Chocolate Croissant",
      price: "$3.5",
      img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a",
    },
    {
      name: "Blueberry Muffin",
      price: "$3",
      img: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa",
    },
    {
      name: "Cheese Cake",
      price: "$5",
      img: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad",
    },
    {
      name: "Cinnamon Roll",
      price: "$3.5",
      img: "https://mccormick.widen.net/content/megysgsour/jpeg/Holiday_Cinnamon-Rolls_1376x774.jpeg",
    },
    {
      name: "Latte",
      price: "$4.5",
      img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735",
    },
    {
      name: "Cold Brew",
      price: "$4",
      img: "https://www.eatingwell.com/thmb/ypZDdq0HS72jXHjFCAt5eXRtF7E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/How-to-Make-Cold-Brew-Coffee-b4af3ec355b642e78bb79e18991a0da0.jpg",
    },
  ];

  return (
    <section id="menu" className="py-28 px-10">
      <h2 className="text-4xl font-bold text-center text-[#5C3A21] mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
        >
          Popular Menu
        </motion.h2>
      </h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {menu.slice(0, visibleItems).map((item, i) => (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            key={i}
            whileHover={{ y: -8 }}
            className="bg-white rounded-xl overflow-hidden shadow-md group"
          >
            <div className="overflow-hidden">
              <img
                src={item.img}
                className="h-52 w-full object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            <div className="p-6">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold">{item.name}</h3>

                <span className="font-bold text-[#8B5E3C]">{item.price}</span>
              </div>

              <p className="text-gray-600 text-sm">
                Made fresh with premium ingredients and care.
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-10">
        {visibleItems < menu.length ? (
          <button
            onClick={() => setVisibleItems(visibleItems + 3)}
            className="px-6 py-3 bg-[#8B5E3C] text-white rounded-lg hover:bg-[#6B4226] transition cursor-pointer"
          >
            View More
          </button>
        ) : (
          <button
            onClick={() => setVisibleItems(3)}
            className="px-6 py-3 bg-[#8B5E3C] text-white rounded-lg hover:bg-[#6B4226] transition"
          >
            Show Less
          </button>
        )}
      </div>
    </section>
  );
};

export default Menu;
