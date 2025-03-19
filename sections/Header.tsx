"use client";
import { IoCloseOutline } from "react-icons/io5";
import { MdHandyman } from "react-icons/md";
import NavContact from "@/components/NavContact";
import { roboto } from "@/public/assets/fonts/font";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import NavLinks from "@/components/NavLinks";
import { motion, AnimatePresence,useScroll  } from "framer-motion";

const Header = () => {
  const { scrollYProgress } = useScroll()
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
      <header className="text-white p-4 relative">
        <motion.div
            id="scroll-indicator"
            style={{
              scaleX: scrollYProgress,
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              height: 10,
              originX: 0,
              backgroundColor: "#da0b34",
            }}
        />
        <div className="flex flex-row items-center justify-between w-full">
          <div className="header-logo flex gap-1 items-center justify-center">
            <a href="/">
              <MdHandyman
                  size={42}
                  className="hover:scale-110 hover:text-orange-200 transition duration-300 ease-in"
              />
            </a>
            <div className="mx-1">
              <h1
                  className={`text-neutral-400 text-4xl hover:text-white transition ease-in duration-300 ${roboto.className}`}
              >
                Demir
              </h1>
              <h3 className="text-neutral-400 hover:text-white transition ease-in duration-300 font-medium">
                Tamirat & Tadilat
              </h3>
            </div>
          </div>
          <div>
            <NavContact />
          </div>
          <div className="flex sm:hidden">
            {!isOpen && (
                <AiOutlineMenu
                    className="text-white"
                    size={24}
                    onClick={toggleMenu}
                />
            )}
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
                    className="fixed inset-0  backdrop-blur-sm z-10"
                    onClick={toggleMenu}
                />


                <motion.div
                    initial={{ y: -200, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -200, opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="fixed inset-x-0 top-0 bg-black bg-opacity-90 z-20"
                >
                  <div className="sm:hidden flex justify-between items-start p-4">
                    <div>
                      <NavLinks href="/" name="Anasayfa" />
                      <NavLinks href="#" name="Hakkımızda" />
                      <NavLinks href="#" name="Servislerimiz" />
                      <NavLinks href="#" name="Referanslarımız" />
                      <NavLinks href="#" name="İletişim" />
                    </div>
                    <div>
                      <IoCloseOutline
                          onClick={toggleMenu}
                          className="text-white mt-3"
                          size={38}
                      />
                    </div>
                  </div>
                </motion.div>
              </>
          )}
        </AnimatePresence>
      </header>
  );
};

export default Header;