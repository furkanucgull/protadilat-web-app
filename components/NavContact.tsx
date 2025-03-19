import { IoMdCall } from "react-icons/io";
import { TiMessages } from "react-icons/ti";

const NavContact = () => {
  return (
    <div className="  gap-3 lg:px-10 hidden sm:flex lg:mr-56 ">
      <IoMdCall className=" bg-black rounded-full border-2 p-2 w-11 h-11 border-gray-600 text-orange-300" />
      <div className="flex flex-col border-r w-48 border-gray-500 gap-1">
        <h2 className="text-neutral-400"> Bizi Her Zaman Arayın</h2>
        <p className="text-[15px]">0553 612 69 59</p>
      </div>

      <TiMessages className=" bg-black rounded-full border-2 p-2 w-11 h-11 border-gray-600 text-orange-300" />
      <div className="flex flex-col  gap-1">
        <h2 className="text-neutral-400"> Mail gönderin</h2>
        <p className="text-[15px]">info@mail.com</p>
      </div>
    </div>
  );
};
export default NavContact;
