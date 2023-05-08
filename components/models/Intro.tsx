import { motion } from "framer-motion";
import { useCallback } from "react";
import useLoginModal from "./hooks/useLoginModal";

const Intro = () => {
  const loginModal = useLoginModal();

  const onClicks = useCallback(() => {
    loginModal.onOpen();
  }, [loginModal]);

  return (
    <motion.section
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        delay: 0.4,
        duration: 0.75,
      }}
      className="h-[110vh] w-screen  ml-[0px] flex flex-col gap-10 justify-center items-center relative mt-[-10px] overflow-none bg-loverBgMd lg:bg-loverBgLg   "
    >
      <div className="absolute top-[0px]  left-0 w-full h-[110vh] lg:top-[0] bg-[#000000ba]  " />
      <motion.h2
        initial={{ y: -25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.4,
          duration: 0.75,
        }}
        className="text-[30px] lg:text-[40px] w-[100%] px-[20px] tracking-tight leading-[3.5rem] text-center flex justify-center items-center text-[#FFD639] z-[3] md:w-[60%] lg:w-[70%] xl:w-[30%] mt-[-10em] lg:mt-[5em] "
      >
        Join LuneDial And Find your Perfect Match
      </motion.h2>
      <motion.div
        initial={{ x: 25, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.4,
          duration: 0.75,
        }}
        className="flex flex-col justify-center items-center gap-10 absolute md:relative bottom-[150px] md:pt-[200px] lg:pt-[150px] z-[3] "
      >
        <div
          // href="register"
          onClick={() => onClicks()}
          className="flex font-bold bg-[#A30000] py-4 px-10 w-[150%] items-center justify-center text-center text-[#FFD639]  rounded-full "
        >
          Create account
        </div>
        <div
          className="flex lg:hidden font-bold border-2  border-[#A30000] py-4 px-10 w-[150%] items-center justify-center text-[#FFD639] text-center rounded-full "
          // href="/"
        >
          Login
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Intro;
