import Link from "next/link";
import { useCallback } from "react";
import Logo from "../extensions/Nav/Logo";
import { AiOutlineClose } from "react-icons/ai";

interface PopupProps {
  isOpen?: boolean;
  onClose: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled: boolean;
}

const Popup: React.FC<PopupProps> = ({
  isOpen,
  onClose,
  title,
  body,
  footer,
  actionLabel,
  disabled,
}) => {
  const handeleClose = useCallback(() => {
    if (disabled) {
      return;
    }

    onClose();
  }, [disabled, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="z-[99] bg-[gold] fixed mx-auto top-0 left-0 h-screen flex flex-col gap-1 items-center  w-screen lg:rounded-md lg:h-[60%] lg:w-[28em] lg:px-10 lg:ml-[38vw] lg:mt-[20vh] lg:py-[30px]  ">
      <button
        onClick={handeleClose}
        className="ml-auto border-0 text-white hover:opacity-70 transition bg-transparent p-4 absolute top-4 right-5  "
      >
        <AiOutlineClose
          className="font-extrabold "
          size={30}
          color="black"
        />
      </button>
      <div className="flex justify-center mx-auto ml-[50%] items-center mt-[-50px] mb-[25px] md:ml-[50%] lg:ml-[50%] pt-[100px] lg:pt-[10px]  ">
        <Logo short={true} long={false} />
      </div>
      <h3 className="tracking-tighter font-bold mt-[-50px] ">{title}</h3>
      <span className="px-[50px] text-[13px] tracking-tighter text-center font-light md:px-[200px] lg:px-[5px] ">
        By clicking Log In, you agree to our{" "}
        <Link className="text-[#A30000] underline " href={"/"}>
          Terms
        </Link>
        . Learn how we process your data in our{" "}
        <Link href={"/"} className="text-[#A30000] underline ">
          Privacy Policy
        </Link>{" "}
        and{" "}
        <Link href={"/"} className="text-[#A30000] underline ">
          Cookie Policy
        </Link>
      </span>
      {body}
      {footer}
    </div>
  );
};

export default Popup;
