import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const Social = () => {
  return (
    <div className="flex flex-col gap-1 items-start justify-start text-left ">
      <h4 className="font-bold text-[20px] ">Social</h4>
      <ul className="grid grid-cols-2 gap-6 w-[70%] place-content-center items-start justify-start text-left ">
        <li className="text-[35px]" ><Link href={"/"} ><FaWhatsapp /></Link></li>
        <li className="text-[35px]" ><Link href={"/"} ><FaWhatsapp /></Link></li>
        <li className="text-[35px]" ><Link href={"/"} ><FaWhatsapp /></Link></li>
        <li className="text-[35px]" ><Link href={"/"} ><FaWhatsapp /></Link></li>
        <li className="text-[35px]" ><Link href={"/"} ><FaWhatsapp /></Link></li>
        <li className="text-[35px]" ><Link href={"/"} ><FaWhatsapp /></Link></li>
      </ul>
    </div>
  );
};

export default Social;
