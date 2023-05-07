import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

const Social = () => {
  return (
    <div className="flex flex-col gap-1 items-start justify-start text-left ">
      <h4 className="font-bold text-[20px] ">Social</h4>
      <ul className="grid grid-cols-2 gap-6 w-[70%] place-content-center items-start justify-start text-left ">
        <li className="text-[25px]">
          <Link href={"/"}>
            <FaInstagram />
          </Link>
        </li>
        <li className="text-[25px]">
          <Link href={"/"}>
            <FaTwitter />
          </Link>
        </li>
        <li className="text-[25px]">
          <Link href={"/"}>
            <FaYoutube />
          </Link>
        </li>
        <li className="text-[25px]">
          <Link href={"/"}>
            <FaFacebook />
          </Link>
        </li>
        <li className="text-[25px]">
          <Link href={"/"}>
            <FaTiktok />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Social;
