"use client";
import { IoCloseOutline } from "react-icons/io5";
import { MdHandyman } from "react-icons/md";
import NavContact from "@/components/NavContact";
import { roboto } from "@/public/assets/fonts/font";
import { useState, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import NavLinks from "@/components/NavLinks";
import { motion, AnimatePresence, useScroll } from "framer-motion";

const Header = () => {
  const { scrollYProgress } = useScroll();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <header className="text-white p-4 relative overflow-x-hidden">
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 5,
          originX: 0,
          backgroundColor: "#ff5500",
          zIndex: 50,
        }}
      />

      <div className="flex flex-row items-center justify-between w-full">
        <div className="header-logo flex gap-2 items-center lg:mx-12 p-2">
          <a href="/" className="flex items-center gap-2">
            <MdHandyman
              size={42}
              className="hover:scale-110 hover:text-orange-300 transition-transform duration-300"
            />
            <div>
              <h1
                className={`text-neutral-300 text-4xl hover:text-white transition duration-300 ${roboto.className}`}
              >
                Demir
              </h1>
              <h3 className="text-neutral-400 hover:text-white transition duration-300 font-medium">
                Tamirat & Tadilat
              </h3>
            </div>
          </a>
        </div>

        <div className="hidden sm:block">
          <NavContact />
        </div>

        <div className="sm:hidden">
          <AiOutlineMenu
            className="text-white cursor-pointer hover:text-orange-400 transition duration-300"
            size={28}
            onClick={toggleMenu}
          />
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 backdrop-blur-md bg-black/50 z-40"
              onClick={toggleMenu}
            />

            <motion.div
              initial={{ y: -150, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -150, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="fixed inset-x-0 top-0 bg-black bg-opacity-95 z-50 p-6"
            >
              <div className="flex justify-between items-center">
                <h2 className="text-xl text-white font-semibold">Menü</h2>
                <IoCloseOutline
                  onClick={toggleMenu}
                  className="text-white cursor-pointer hover:text-red-400 transition duration-300"
                  size={36}
                />
              </div>

              <nav className="mt-6 flex flex-col gap-4 text-lg ">
                <NavLinks href="/" name="Anasayfa" />
                <NavLinks href="#" name="Hakkımızda" />
                <NavLinks href="#" name="Servislerimiz" />
                <NavLinks href="#" name="Referanslarımız" />
                <NavLinks href="#" name="İletişim" />
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
