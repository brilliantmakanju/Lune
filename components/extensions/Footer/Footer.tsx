import Career from "./Career";
import Legal from "./Legal";
import Social from "./Social";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ y: -25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        delay: 0.4,
        duration: 0.75,
      }}
      className="z-[200] flex  justify-center items-center gap-8 w-full py-12  relative md:hidden "
    >
      <Legal />
      <Career />
      <Social />
      <div className="absolute bottom-0 flex justify-center items-center h-[40px] text-center left-0 w-full bg-[#A30000] text-[#FFD639] ">
        2023 LuneDial
      </div>
    </motion.footer>
  );
};

export default Footer;
