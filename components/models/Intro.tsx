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
      className="h-screen w-[100%] ml-[0px] flex flex-col gap-10 justify-center items-center relative md:hidden overflow-hidden mt-[-10px] "
      style={{ background: "url('loverBg2.jpg')" }}
    >
      <div className="absolute top-[-50px]  left-0 w-full h-[110vh] bg-[#000000ba]"></div>
      <motion.h2
        initial={{ y: -25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.4,
          duration: 0.75,
        }}
        className="text-[50px] w-[90%] tracking-tight leading-[3.5rem] text-center text-[#FFD639] z-[3]  "
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
        className="absolute flex flex-col justify-center items-center gap-10 bottom-[70px] "
      >
        <Link
          href="register"
          className="flex font-bold bg-[#A30000] py-4 px-10 w-[150%] items-center justify-center text-center text-[#FFD639]  rounded-full "
        >
          Create account
        </Link>
        <Link
          className="flex font-bold border-2  border-[#A30000] py-4 px-10 w-[150%] items-center justify-center text-[#FFD639] text-center rounded-full "
          href="/"
        >
          Login
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default Intro;
