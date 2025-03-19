"use client";
import { figtree } from "@/public/assets/fonts/font";
import { motion } from "framer-motion";
import Image from "next/image";

const faqs = [
  {
    question: "Yaptığınız işlere garanti veriyor musunuz?",
    answer:
      "Evet, işimizin kalitesinin arkasındayız. Memnuniyetinizi sağlamak ve hizmetin tamamlanmasından sonra ortaya çıkabilecek sorunları gidermek için garantiler sağlıyoruz.",
  },
  {
    question: "Hafta sonları için hizmet planlayabilir miyim?",
    answer:
      "Kesinlikle! Programınızın yoğun olabileceğini anlıyoruz. Bunun üzerine ihtiyaçlarınıza uyum sağlamak için hafta sonları ve akşamlar dahil olmak üzere esnek programlama sunuyoruz.",
  },
  {
    question: "Ustalarımız lisanslı mı?",
    answer:
      "Evet, tüm ustalarımız kendi alanlarında kapsamlı deneyime sahip lisanslı ve sigortalı profesyonellerdir. Evinizin yetenekli ellerde olduğundan emin olabilirsiniz.",
  },
];

const HowDoesItWork = () => {
  return (
    <section className="min-h-screen bg-[#F0F4FA] py-10">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="flex justify-center"
      >
        <h1 className={`text-4xl font-bold ${figtree.className}`}>
          Nasıl Çalışır?
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="grid lg:grid-cols-2 grid-cols-1 p-5 items-center"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
            hidden: { opacity: 0 },
          }}
          viewport={{ once: true }}
          className="join join-vertical gap-5 w-full max-w-lg mx-auto"
        >
          {faqs.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
              className="collapse collapse-arrow join-item border border-gray-300 rounded-2xl bg-white shadow-md"
            >
              <input type="radio" name="accordion" className="rounded-2xl" />
              <div className="collapse-title font-semibold text-lg">
                {item.question}
              </div>
              <div className="collapse-content text-sm text-gray-600">
                {item.answer}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex justify-center mt-4 sm:mt-0"
        >
          <div className="relative h-96 w-full max-w-lg">
            <Image
              src="/assets/images/usta.jpg"
              alt="How It Works"
              layout="fill"
              objectFit="cover"
              className="rounded-xl shadow-lg"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HowDoesItWork;
