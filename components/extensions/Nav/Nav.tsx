import Logo from "./Logo";
import { FaBars } from "react-icons/fa";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

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
        className=" w-full  h-20 flex justify-between items-center z-[20] lg:mb-[-5em] px-5 xl:container lg:mx-auto xl:w-[200vw]  "
      >
        <Logo />
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
