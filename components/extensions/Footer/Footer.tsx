import Career from "./Career";
import Legal from "./Legal";
import Social from "./Social";
import { motion } from "framer-motion";
import Faq from "./Faq";
import Bottom from "./Bottom";

const Footer = () => {
  return (
    <motion.footer
      initial={{ y: -25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        delay: 0.4,
        duration: 0.75,
      }}
      className="z-[20] flex flex-col flex-wrap tracking-tighter gap-5 justify-start  items-start pt-[10px] pb-[50px] text-left place-content-start px-[20px] relative font-bold lg:px-[100px] lg:gap-[50px] w-screen xl:justify-center xl:items-center 2xl:py-10 bg-[#722f37] text-white 3xl:px-[150em]  lg:mt-[30px] "
    >
      <div className="grid grid-cols-3 gap-10  lg:flex lg:flex-wrap lg:gap-[25px] ">
        <Legal />
        <Career />
        <Social />
        <Faq />
      </div>
      <Bottom />
    </motion.footer>
  );
};

export default Footer;
