import Link from "next/link";
import { useCallback } from "react";
import Logo from "../extensions/Nav/Logo";

interface PopupProps {
  isOpen?: boolean;
  onClose?: () => void;
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
  //   const handeleClose = useCallback(() => {
  //     if (disabled) {
  //       return;
  //     }

  //     onClose();
  //   }, [disabled, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="z-[9999] bg-[gold] fixed mx-auto top-0 left-0 h-screen flex flex-col gap-1 items-center  w-screen lg:w-full lg:h-full lg:left-[50%] lg:top-[50%] ">
      <div className="flex justify-center mx-auto ml-[16em] items-center mt-[-50px] mb-[25px] ">
        <Logo short={true} long={false} />
      </div>
      <h3 className="tracking-tighter font-bold mt-[-50px] ">{title}</h3>
      <span className="px-[10px] text-[13px] tracking-tighter text-center font-light ">
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
