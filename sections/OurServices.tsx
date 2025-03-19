"use client";
import { motion } from "framer-motion";

const OurServices = () => {
  return (
    <section id="services" className="md:py-16  bg-black text-white">
      <motion.div
        initial={{ opacity: 0, y: -150 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
       
      >
        <motion.div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-orange-400">
            Hizmetlerimiz
          </h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.5 } },
              hidden: {},
            }}
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4 text-orange-400">
                Boyama Hizmeti
              </h3>
              <p className="text-gray-300">
                İç ve dış cephe boyama işlerinizde uzman ekibimizle
                hizmetinizdeyiz. Kaliteli boyalar ve modern tekniklerle evinize
                veya iş yerinize yeni bir görünüm kazandırıyoruz.
              </p>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4 text-orange-400">
                Elektrik Hizmeti
              </h3>
              <p className="text-gray-300">
                Elektrik tesisatı, aydınlatma, priz ve sigorta tamiratı gibi tüm
                elektrik işlerinizde güvenilir ve hızlı çözümler sunuyoruz.
              </p>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4 text-orange-400">
                Parke Döşeme
              </h3>
              <p className="text-gray-300">
                Laminant, laminat ve ahşap parke döşeme işlerinizde uzman
                ekibimizle hizmetinizdeyiz. Evinize veya iş yerinize şık ve
                dayanıklı zeminler sunuyoruz.
              </p>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4 text-orange-400">
                Su Tesisatı
              </h3>
              <p className="text-gray-300">
                Su tesisatı tamiratı, boru değişimi, tıkanıklık açma gibi tüm su
                tesisatı işlerinizde hızlı ve kalıcı çözümler sunuyoruz.
              </p>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4 text-orange-400">
                Alçıpan ve Tavan İşleri
              </h3>
              <p className="text-gray-300">
                Alçıpan bölme duvarlar, asma tavanlar ve dekoratif tavan
                işlerinizde modern çözümler sunuyoruz.
              </p>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4 text-orange-400">
                Cam ve Pencere İşleri
              </h3>
              <p className="text-gray-300">
                Cam değişimi, pencere tamiratı ve izolasyon işlerinizde uzman
                ekibimizle hizmetinizdeyiz.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default OurServices;
