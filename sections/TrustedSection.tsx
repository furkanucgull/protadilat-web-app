"use client";
import { roboto } from "@/public/assets/fonts/font";
import { motion } from "framer-motion";

const TrustedSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className={`bg-[#1D5BCF] text-white p-10 flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-10 ${roboto.className}`}
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="relative w-full md:w-1/2"
      >
        <img
          src="https://framerusercontent.com/images/m3AQ67Z5PpHYcZ6dWbBrRJhzzs.jpg?scale-down-to=1024"
          alt="Modern Kitchen"
          className="rounded-lg shadow-lg w-full"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute md:bottom-1 md:left-32 left-8 -bottom-12 bg-blue-700 text-white p-4 rounded-lg shadow-md flex space-x-6 gap-5"
        >
          <div className="border-r-2 w-full flex flex-col gap-2">
            <p className="text-2xl font-bold text-center">10</p>
            <p className="text-sm text-center">
              Yıllık <br /> Deneyim Süremiz
            </p>
          </div>
          <div className="flex flex-col gap-2 text-center">
            <p className="text-2xl font-bold">1000+</p>
            <p className="text-sm">Bitirilen projeler</p>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="w-full md:w-1/2 text-center md:text-left lg:pt-20 pt-10"
      >
        <h2 className="text-3xl font-bold mb-4">
          Tamirat ve Tadilatlar için güvenilir ortağınızız
        </h2>
        <p className="mb-4">
          Küçük onarımlardan kapsamlı tadilatlara kadar, kaliteye ve müşteri
          memnuniyetine olan bağlılığımız sarsılmaz olmaya devam ediyor.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default TrustedSection;
