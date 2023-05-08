import Logo from "./Logo";
import { FaBars } from "react-icons/fa";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Links from "./Links";
import CTA from "./CTA";

const Nav = () => {
  const router = useRouter();

  return (
    <>
      <motion.nav
        initial={{ y: -25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.4,
          duration: 0.75,
        }}
        className={`w-screen  h-20 flex justify-between items-center z-[100] lg:mb-[-5em] px-12  xl:w-[100vw] ${
          router.route === "/" ? "bg-transparent " : "bg-[#121111a6]"
        } `}
      >
        <div className="flex gap-10 justify-start items-center ">
          <Logo short long />
          <Links />
        </div>
        <CTA />
        <div className="lg:hidden  flex flex-col ">
          <FaBars
            color={`${router.route === "/" ? "white" : "#231F20"}`}
            className="text-[30px]"
          />
        </div>
      </motion.nav>
      {/* <nav></nav> */}
    </>
  );
};

export default Nav;
