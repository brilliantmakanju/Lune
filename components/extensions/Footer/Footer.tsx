import Career from "./Career";
import Legal from "./Legal";
import Social from "./Social";

const Footer = () => {
  return (
    <footer className="flex  justify-start items-start gap-4 w-full py-12  relative md:hidden ">
      <Legal />
      <Career />
      <Social />
      <div className="absolute bottom-0 text-center left-0 w-full bg-[#A30000] text-[#FFD639] ">
        2023 LuneDial
      </div>
    </footer>
  );
};

export default Footer;
