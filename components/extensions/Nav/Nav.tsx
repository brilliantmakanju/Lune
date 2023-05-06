import Logo from "./Logo";
import { FaBars } from "react-icons/fa"

const Nav = () => {
  return (
    <>
      <nav className=" w-full  h-20 px-5 flex justify-between items-center z-[20] md:hidden ">
        <Logo />
        <div className="lg:hidden flex flex-col " >
          <FaBars color={'#231F20'} className="text-[40px]" />
        </div>
      </nav>
      {/* <nav></nav> */}
    </>
  );
};

export default Nav;
