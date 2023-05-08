import useLoginModal from "@/components/models/hooks/useLoginModal";
import Link from "next/link";
import { useCallback } from "react";

const CTA = () => {
  const loginModal = useLoginModal();

  const onClicks = useCallback(() => {
    loginModal.onOpen();
  }, [loginModal]);

  return (
    <div className="lg:flex justify-end items-center hidden">
      <button
        onClick={() => onClicks()}
        className="flex justify-center items-center bg-white text-[black] py-2 px-7 rounded-full font-bold "
        // href="/"
      >
        Log in
      </button>
    </div>
  );
};

export default CTA;
