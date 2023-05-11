import Logo from "./Logo";
import { FaBars, FaCut } from "react-icons/fa";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Links from "./Links";
import CTA from "./CTA";
import useLoginModal from "@/components/models/hooks/useLoginModal";
import { useCallback } from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  const router = useRouter();

  const [mobile, setMobile] = useState(false);

  const loginModal = useLoginModal();

  const onClicks = useCallback(() => {
    router.push("register");
  }, [router]);

  return (
    <>
      <motion.nav
        initial={{ y: -25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.4,
          duration: 0.75,
        }}
        className={`w-screen h-20 flex justify-between items-center z-[100] lg:mb-[-5em] px-12  xl:w-[100vw] ${
          router.route === "/"
            ? "bg-[#121111a6]  "
            : "bg-[#121111a6] h-10 pt-10 pb-5 lg:pb-10 "
        } `}
      >
        <div className="flex gap-10 justify-start items-center ">
          <Logo short long />
          <Links />
        </div>
        <CTA />
        {/* <div
          className="lg:hidden bg-[red] h-[20px] flex flex-col w-[40px] "
          onClick={() => setMobile(!mobile)}
        > */}
        <FaBars
          onClick={() => setMobile(!mobile)}
          color={`${router.route === "/" ? "white" : "white"}`}
          className="text-[20px] mt-[-20px] lg:hidden "
        />
        {/* </div> */}
      </motion.nav>
      <div
        className={`h-screen w-screen ${
          mobile
            ? "fixed left-[0vw] top-0  z-[99999] "
            : "fixed left-[100vw] opacity-0 top-0 "
        } duration-[0.5s] transition-all ease-in-out  pt-[72px] flex flex-col gap-[150px] z-[19] justify-start fixed left-0 top-0 w-[70%]  text-white h-screen bg-[#2d2a2a] px-4 py-4 lg:hidden`}
      >
        <div className="absolute top-0 left-0 flex justify-between items-center h-[20px] w-full ">
          <div className=" mt-[60px] ml-[20px] ">
            <Link href={"/"}>
              <div
                className={`relative flex h-[9rem] w-[9rem] mt-[-15px] ml-[-50px]  `}
              >
                <Image
                  src={"/logo/shortlogo.png"}
                  width={200}
                  height={200}
                  alt="Logo"
                />
                <Image
                  src={"/logo/logoname.png"}
                  className="ml-[-60px] mt-[-15px] lg:ml-[-65px] lg:mt-[-20px] "
                  width={200}
                  height={200}
                  alt="Logo"
                />
              </div>
            </Link>
          </div>

          <FaCut
            className={` absolute top-[20px] right-[40px] `}
            onClick={() => setMobile(!mobile)}
            size={20}
          />
        </div>
        <ul className="w-full flex justify-start items-start flex-col gap-5  ">
          <Link className="w-full" href={"/"}>
            <li className="bg-[#1a1818] text-[white] w-full px-3 py-3 font-bold text-[15px] rounded-md ">
              Home
            </li>
          </Link>
          <Link className="w-full" href={"pricing"}>
            <li className="bg-[#1a1818] text-[white] w-full px-3 py-3 font-bold text-[15px] rounded-md ">
              Pricing
            </li>
          </Link>
          <Link className="w-full" href="contact">
            <li className="bg-[#1a1818] text-[white] w-full px-3 py-3 font-bold text-[15px] rounded-md ">
              Contact us
            </li>
          </Link>
          <Link className="w-full" href={"about"}>
            <li className="bg-[#1a1818] text-[white] w-full px-3 py-3 font-bold text-[15px] rounded-md ">
              About us
            </li>
          </Link>
        </ul>

        <div className="absolute bottom-[150px] left-[-5px] flex flex-col justify-center items-center w-full ">
          <button
            onClick={() => onClicks()}
            className="flex justify-center items-center bg-white text-[black] py-2 text-[20px] w-[80%] rounded-full font-bold "
            // href="/"
          >
            Log in
          </button>
        </div>
      </div>
    </>
  );
};

export default Nav;
