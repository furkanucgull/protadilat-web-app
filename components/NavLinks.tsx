import { lora } from "@/public/assets/fonts/font";

type Props = {
  href: string;
  name: string;
};
const NavLinks = ({ name, href }: Props) => {
  return (
    <div className="p-4 ml-6 ">
      <a
        href={href}
        className="text-white  hover:text-neutral-500 transition-colors"
      >
        <p className={`${lora.className} text-lg`}>{name}</p>
      </a>
    </div>
  );
};
export default NavLinks;
