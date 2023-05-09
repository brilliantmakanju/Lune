import Link from "next/link";
import {
  FaFacebook,
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

const Social = () => {
  return (
    <div className="flex flex-col gap-1 items-start justify-start text-left ">
      <h4 className=" text-[15px] ">Social</h4>
      <ul className="grid grid-cols-3 gap-5 w-[70%] place-content-center items-start justify-start text-left lg:grid-cols-5 ">
        <li className="text-[20px] ">
          <Link href={"/"}>
            <FaInstagram />
          </Link>
        </li>
        <li className="text-[20px] ">
          <Link href={"/"}>
            <FaTwitter />
          </Link>
        </li>
        <li className="text-[20px] ">
          <Link href={"/"}>
            <FaYoutube />
          </Link>
        </li>
        <li className="text-[20px] ">
          <Link href={"/"}>
            <FaFacebookF />
          </Link>
        </li>
        <li className="text-[20px] ">
          <Link href={"/"}>
            <FaTiktok />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Social;
