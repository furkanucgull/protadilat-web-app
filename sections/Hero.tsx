"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const images = [
  "/assets/images/slider-1.jpg",
  "/assets/images/slider-2.jpg",
  "/assets/images/slider-3.jpg",
  "/assets/images/slider-4.jpg",
];

const Hero = () => {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const paragraphValue = useTransform(scrollYProgress, [0, 1], ["0%", "55%"]);
  const sectionValue = useTransform(scrollYProgress, [1, 0], ["40%", "100%"]);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      initial={{ scale: 1 }}
      style={{ scale: sectionValue }}
      className="min-h-screen my-10 overflow-x-hidden relative"
    >
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        {images.map((image, index) => (
          <motion.div
            key={image}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "brightness(0.6)",
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <div ref={scrollRef} className="grid grid-cols-10 min-h-screen">
          <motion.div
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{ translateX: paragraphValue }}
            className="flex flex-col lg:p-20 p-10 mx-auto gap-6 w-full col-span-6"
          >
            <h1 className="text-neutral-300 lg:text-6xl md:text-3xl text-xl">
              Güvenilir & Kaliteli
            </h1>
            <h3 className="text-orange-400 lg:text-5xl text-sm">
              Tamirat ve Tadilat Hizmetleri
            </h3>
            <p className="text-white md:text-xl text-sm">
              Alanında uzman ekibimizle her türlü tamirat ve tadilat işini
              profesyonelce tamamlıyoruz.
            </p>
            <p className="text-white md:text-xl text-sm">
              Acil durumlar için 7/24 hizmet veriyoruz.
            </p>
          </motion.div>
          <motion.div
            style={{
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundImage: "url('/assets/images/plumber.png')",
            }}
            className="bg-contain xl:ml-56 bg-no-repeat min-h-screen col-span-4 mt-4"
          ></motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
