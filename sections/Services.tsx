"use client";
const services = [
  {
    title: "Dış Mekan",
    image: "assets/images/exterior.jpg",
    icon: "🏡",
  },
  {
    title: "iç Mekan",
    image: "assets/images/interior2.jpg",
    icon: "🏠",
  },
  {
    title: "Parke Döşeme",
    image: "assets/images/parke.jpg",
    icon: "🔨",
  },
  {
    title: "Banyo & Tuvalet",
    image: "assets/images/toilet.jpg",
    icon: "🚽",
  },
  {
    title: "Seramik Döşeme",
    image: "assets/images/seramic.jpg",
    icon: "🔨",
  },
  {
    title: "Elektrik işleri",
    image: "assets/images/electrik.jpg",
    icon: "🔌",
  },
  {
    title: "Sıva",
    image: "assets/images/siva.jpg",
    icon: "🖌",
  },
  {
    title: "Çelik İşleri",
    image: "assets/images/construction.jpg",
    icon: "🛠️",
  },
  {
    title: "Montaj",
    image: "assets/images/montaj.jpg",
    icon: "🔧",
  },
];
import { roboto } from "@/public/assets/fonts/font";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <section
        id="services"
      className={`py-16 bg-white text-center overflow-x-hidden ${roboto.className}`}
    >
      <div className="container mx-auto px-6 lg:px-20">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl font-bold text-gray-900 mb-4"
        >
          <span className="text-blue-600">Geniş </span> bir yelpazede{" "}
          <span className="text-blue-600">hizmet</span> sunuyoruz
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="text-gray-600 max-w-xl mx-auto"
        >
          Tarzınızı yansıtan ve pratik ihtiyaçlarınızı karşılayan bir alan
          oluşturmada ortağınız olalım.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="bg-gray-100 rounded-lg overflow-hidden shadow-md"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-64 object-cover transition-transform duration-300 ease-in-out hover:scale-110"
              />
              <div className="p-4 flex items-center">
                <span className="text-2xl mr-2">{service.icon}</span>
                <h3 className="text-lg font-semibold text-gray-800">
                  {service.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
