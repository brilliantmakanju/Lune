import Logo from "./Logo";
import { FaHamburger } from "react-icons/fa"

const Nav = () => {
  return (
    <>
      <nav className=" w-full  h-20 px-5 flex justify-between items-center z-[20] md:hidden ">
        <Logo />
        <div className="lg:hidden flex flex-col " >
          <FaHamburger color={'#231F20'} className="text-[50px]" />
        </div>
      </nav>
      {/* <nav></nav> */}
    </>
  );
};

export default Nav;
