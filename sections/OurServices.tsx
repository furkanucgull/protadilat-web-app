"use client";
import { figtree, figtree_light } from "@/public/assets/fonts/font";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const OurServices = () => {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: scrollRef });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      viewport={{ once: true }}
      className={` ${figtree.className}`}
    >
      <div
        ref={scrollRef}
        className="grid grid-cols-1 lg:grid-cols-2 min-h-screen bg-amber-300"
      >
        <div className="bg-white p-10">
          <motion.div
            className="grid gap-5"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
              staggerChildren: 0.3,
            }}
            viewport={{ once: true }}
          >
            <motion.div
              className="flex justify-center"
              whileHover={{ scale: 1.05 }}
              style={{ y: imageY }}
              viewport={{ once: true }}
            >
              <img
                className="rounded-xl h-96 object-cover  w-full"
                src="/assets/images/service1.jpg"
                //src="https://framerusercontent.com/images/41zIICdN6n2jEuAlbSTuFfV9e5g.jpg?scale-down-to=1024"
                alt="Image 1"
              />
            </motion.div>

            <div className="grid grid-cols-2 gap-5">
              <motion.img
                className="rounded-xl h-64 object-cover w-full"
                src="/assets/images/service2.jpg"
                  //src="https://framerusercontent.com/images/S7Gq1hSETm895d8nGntnZPOBo.jpg?scale-down-to=512"
                alt="Image 2"
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true }}
              />
              <motion.img
                className="rounded-xl h-64 object-cover w-full"
                src="/assets/images/service3.jpg"
                  //src="https://framerusercontent.com/images/5TJrfkcm62NL7GzhdPxOWdNFbnM.jpg?scale-down-to=1024"
                alt="Image 3"
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true }}
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          className="bg-white"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <div className="lg:p-20 p-5 lg:my-40 space-y-10">
            <div className="space-y-5">
              <h1 className="lg:text-5xl text-3xl ">
                Profesyonel Tamir ve Tadilat hizmeti alın
              </h1>
              <p className={`md:text-lg text-sm ${figtree_light.className}`}>
                Yetenekli ve kendini işine adamış tamircilerden oluşan ekibimiz,
                yaşam alanlarınızın konforunu ve işlevselliğini artırmak için
                büyük veya küçük her türlü projeyi üstlenmeye hazır. Damlayan
                bir musluğu tamir etmekten tüm mutfağınızı yenilemeye kadar her
                şey sizin için hazır.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-10">
              <motion.div
                className="flex items-center gap-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="bg-orange-300 p-3 rounded-full">
                  <img
                    className="lg:w-14 lg:h-14 h-8 w-8 rounded-lg"
                    src="/assets/images/calendar.png"
                    alt="calendar"
                  />
                </div>
                <div>
                  <h1 className="md:text-2xl text-xl">7/24</h1>
                  <p className="lg:text-xl text-base">Aktif Hizmet</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="bg-orange-300 p-3 rounded-full">
                  <img
                    className="lg:w-14 lg:h-14 h-8 w-8 rounded-lg"
                    src="/assets/images/clock.png"
                    alt="clock"
                  />
                </div>
                <div>
                  <h1 className="text-2xl">1 Saat</h1>
                  <p className="lg:text-xl text-base">İçinde geri dönüş</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
      <div
        style={{
          backgroundImage: `url("https://framerusercontent.com/images/c0EZxtMucSR6UOSZk2TBnWsqr4.svg")`,
        }}
      >
        <img src="https://framerusercontent.com/images/c0EZxtMucSR6UOSZk2TBnWsqr4.svg" />
      </div>
    </motion.section>
  );
};

export default OurServices;
