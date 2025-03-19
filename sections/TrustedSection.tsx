"use client";
import { roboto } from "@/public/assets/fonts/font";
import { motion } from "framer-motion";
import DemirTadilat from "@/components/DemirTadilat";

const TrustedSection = () => {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{once:true}}
      transition={{ duration: 1 }}
      className={`bg-[#1D5BCF] text-white py-20 px-6 md:px-10 lg:px-20 ${roboto.className}`}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{once:true}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Tamirat ve Tadilatlar için Güvenilir Ortağınız
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Küçük onarımlardan kapsamlı tadilatlara kadar, kaliteye ve müşteri
            memnuniyetine olan bağlılığımız sarsılmaz olmaya devam ediyor.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="relative w-full lg:w-1/2"
          >
            <img
              src="https://framerusercontent.com/images/m3AQ67Z5PpHYcZ6dWbBrRJhzzs.jpg?scale-down-to=1024"
              alt="Modern Kitchen"
              className="rounded-lg shadow-2xl w-full"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-blue-700 text-white p-6 rounded-lg shadow-md flex space-x-8 gap-5"
            >
              <div className="border-r-2 pr-8">
                <p className="text-3xl font-bold text-center">10</p>
                <p className="text-sm text-center">
                  Yıllık <br /> Deneyim Süremiz
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold">1000+</p>
                <p className="text-sm">Bitirilen Projeler</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <DemirTadilat />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default TrustedSection;
