import Link from "next/link";
import { useState, useCallback } from "react";
import useLoginModal from "../hooks/useLoginModal";
import Popup from "../Popup";

const LoginModal = () => {
  const loginModal = useLoginModal();
  //   const loginModal = true;
  const [isLoading, setLoading] = useState(false);

  const onToggle = useCallback(() => {
    if (isLoading) {
      return;
    }

    loginModal.onClose();
  }, [isLoading, loginModal]);

  const bodyContent = (
    <div className="flex flex-col justify-center items-center gap-2 mt-[10px] ">
      <Link
        href={"/"}
        className={`px-10 py-2 text-[12px] border-[#959595] font-bold text-[gold] rounded-full bg-[#A30000] `}
      >
        Continue with Google{" "}
      </Link>
      <Link
        href={"/"}
        className={`px-10 border-[3px] border-[gold] py-2 font-bold text-[12px] text-[#A30000] rounded-full bg-[#ffffff] `}
      >
        Log in with Facebook{" "}
      </Link>
      <Link
        href={"/"}
        className={`px-6 py-2 text-[12px]  border-[3px]  border-[gold] font-bold text-[#A30000] rounded-full bg-[#ffffff] `}
      >
        Log in with phone number
      </Link>
    </div>
  );

  const footerContent = (
    <div className="text-neutral-400 text-center mt-[-10px">
      <Link className="text-[#A30000] text-[10px] underline " href={"/"}>
        Trouble loggin in?
      </Link>
    </div>
  );

  return (
    <Popup
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      title="Get Started"
      actionLabel="Sign in"
      onClose={loginModal.onClose}
      body={bodyContent}
      footer={footerContent}
    />
  );
};
export default LoginModal;
