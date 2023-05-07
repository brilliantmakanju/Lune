import { motion } from "framer-motion";
import Link from "next/link";

const Intro = () => {
  return (
    <motion.section
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        delay: 0.4,
        duration: 0.75,
      }}
      className="h-[110vh] w-[100%]  ml-[0px] flex flex-col gap-10 justify-center items-center relative mt-[-10px] overflow-hidden bg-loverBg md:bg-loverBgMd lg:bg-loverBgLg md:w-[98.2vw] lg:w-screen  "
    >
      <div className="absolute top-[-40px]  left-0 w-full h-[110vh] bg-[#000000ba]  " />
      <motion.h2
        initial={{ y: -25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.4,
          duration: 0.75,
        }}
        className="text-[30px] lg:text-[40px] w-[100%] px-[20px] tracking-tight leading-[3.5rem] text-center flex justify-center items-center text-[#FFD639] z-[3] md:w-[60%] lg:w-[70%] xl:w-[40%] "
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
        className="flex flex-col justify-center items-center gap-10 absolute md:relative bottom-[150px] md:pt-[200px] lg:pt-[10px] z-[3] "
      >
        <Link
          href="register"
          className="flex font-bold bg-[#A30000] py-4 px-10 w-[150%] items-center justify-center text-center text-[#FFD639]  rounded-full "
        >
          Create account
        </Link>
        <Link
          className="flex lg:hidden font-bold border-2  border-[#A30000] py-4 px-10 w-[150%] items-center justify-center text-[#FFD639] text-center rounded-full "
          href="/"
        >
          Login
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default Intro;
