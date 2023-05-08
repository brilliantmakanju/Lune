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
      className="z-[20] flex flex-wrap gap-5 justify-start  items-start pt-[100px] pb-[50px] text-left place-content-start px-[20px] relative font-bold lg:px-[100px] lg:gap-[50px] "
    >
      <Legal />
      <Career />
      <Social />
      <Faq />

      <Bottom />
    </motion.footer>
  );
};

export default Footer;
