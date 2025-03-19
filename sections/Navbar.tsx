import NavLinks from "@/components/NavLinks";

const Navbar = () => {
  return (
    <header className="flex-row justify-between overflow-x-hidden ">
      <div className="justify-center flex">
        <div className=" m-8 mt-2 sm:flex hidden items-center justify-center rounded-full w-5xl  bg-[#292F3B]/45 gap-6 ">
          <NavLinks href="/" name="Anasayfa" />
          <NavLinks href="#projects" name="Projelerimiz" />
          <NavLinks href="#services" name="Servislerimiz" />
          <NavLinks href="#" name="Referanslarımız" />
          <NavLinks href="#contact" name="İletişim" />
        </div>
      </div>
    </header>
  );
};
export default Navbar;
