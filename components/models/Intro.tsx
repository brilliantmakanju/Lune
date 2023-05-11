import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback } from "react";
import useLoginModal from "./hooks/useLoginModal";

const Intro = () => {
  const loginModal = useLoginModal();
  const router = useRouter();

  const onClicks = useCallback(() => {
    loginModal.onOpen();
  }, [loginModal]);

  const onRegister = useCallback(() => {
    router.push("/register");
  }, [router]);

  return (
    <motion.section
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        delay: 0.4,
        duration: 0.75,
      }}
      className="h-[110vh] w-screen  ml-[0px] flex flex-col gap-10 justify-center items-center relative mt-[-10px] lg:mt-[-15px] overflow-none bg-loverBgMd lg:bg-loverBgLg   "
    >
      {/* <div className=" w-full h-[110vh] lg:top-[0] bg-[#000000ba]  " /> */}
      <motion.h2
        initial={{ y: -25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.4,
          duration: 0.75,
        }}
        className="text-[40px] lg:text-[50px] w-[100%] px-[20px] tracking-tighter leading-[5.5rem] text-center flex justify-center items-center text-[#FFD639] z-[3] md:w-[50%] md:px-[20px] lg:w-[80%] xl:w-[40%] mt-[-5em] md:mt-[4em] lg:mt-[1em] xl:text-[5em]  2xl:text-[5.5em] 2xl:w-[40%] ] 2xl:leading-[5rem] "
      >
        Find your Perfect Match
      </motion.h2>
      <motion.div
        initial={{ x: 25, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.4,
          duration: 0.75,
        }}
        className="flex flex-col justify-center items-center gap-5 absolute md:relative bottom-[230px] md:pt-[200px] lg:pt-[250px] z-[3] "
      >
        <Link
          href="register"
          // onClick={() => onRegister()}
          className="flex font-bold bg-[#A30000] py-2 px-12 w-[150%] items-center justify-center text-center text-[#FFD639] text-[12.5px] rounded-full xl:text-[20px] "
        >
          Create account
        </Link>
        <Link
          href="register"
          className="flex lg:hidden font-bold border-2  border-[#A30000] py-2 px-12 w-[150%] items-center justify-center text-[12.5px]  text-[#FFD639] text-center rounded-full "
          // href="/"
        >
          Log in
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default Intro;
