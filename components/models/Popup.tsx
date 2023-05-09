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
    <>
      <div className="fixed flex flex-col gap-4 justify-start items-center top-0 left-0  sm:w-[40vw] h-screen w-screen bg-[#ffffff] z-[1] sm:rounded-[10px] sm:h-auto sm:fixed sm:top-[22.5vh] sm:py-[10px] sm:left-[30vw] lg:w-[30vw] lg:h-auto lg:left-[35vw] overflow-hidden xl:h-auto xl:py-7 xl:w-[25%] xl:left-[38vw] 2xl:hidden ">
        <div className="flex flex-col justify-center items-center pl-[30px] rounded-full sm:pl-[50px] lg:mt-[-50px] lg:pl-[70px]  ">
          <Logo short long={false} />
          <button
            onClick={handeleClose}
            className="ml-auto border-0 text-white hover:opacity-70 transition bg-transparent p-4 absolute top-[-10px] right-[5px] sm:top-[5px] sm:right-[10px]  "
          >
            <AiOutlineClose
              className="font-[900] "
              size={20}
              color="black"
            />
          </button>
        </div>

        <div className="flex flex-col gap-[15px] justify-center items-center lg:mt-[-50px] ">
          <h3 className="text-[18px] font-extrabold tracking-tighter italic ">
            {title}
          </h3>
          <span className="px-[20px] tracking-tighter text-[12.5px] text-center  md:px-[20px] sm:w-[100%] lg:px-[20px]  ">
            By clicking Log In, you agree to our{" "}
            <Link
              className="text-[#A30000] font-bold tracking-tighter underline "
              href={"/"}
            >
              Terms
            </Link>
            . Learn how we process your data in our{" "}
            <Link
              href={"/"}
              className="tracking-tighter font-bold text-[#A30000] underline "
            >
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link
              href={"/"}
              className="tracking-tighter font-bold text-[#A30000] underline "
            >
              Cookie Poicy
            </Link>
          </span>
          {body}
          {footer}
        </div>
      </div>
    </>
  );
};

export default Popup;
