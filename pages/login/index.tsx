import { motion } from "framer-motion";
import { NextSeo } from "next-seo";
import Link from "next/link";

const Login = () => {
  return (
    <>
      <NextSeo
        title="Login"
        description="Log in now with Lunedial and find your perfect match with adequate security"
      />
      <motion.main
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 50, opacity: 1 }}
        transition={{
          delay: 0.5,
          duration: 0.65,
        }}
        className="h-screen flex  place-content-center py-[10vh] lg:my-[10vh] px-2 z-[0] lg:h-[100%] "
      >
        <div className="flex flex-col items-center justify-start backdrop-blur-sm border-2 border-[#A30000] gap-1 p-2  rounded-md md:rounded-l-md h-[500px] w-[400px] md:w-[400px]  ">
          <div className="text-center text-gray-800 my-5 ">
            <h3 className="text-[35px] font-extrabold  ">Login </h3>
            <Link href={"register"} className="font-bold text-[15px]  ">
              Not yet a member?{" "}
            </Link>
          </div>
          <form className="px-1 w-[350px] flex flex-col gap-5 items-center ">
            <input
              className="h-[2.5em] bg-transparent rounded-t-md px-5 pl-1 w-[100%] border-0 outline-none border-b-2 border-[#A30000] placeholder:text-gray-800 placeholder:font-bold text-gray-800 font-bold "
              type="email"
              placeholder="Email"
            />
            <input
              className="h-[2.5em] bg-transparent rounded-t-md px-5 pl-1 w-[100%] border-0 outline-none border-b-2 border-[#A30000] placeholder:text-gray-800 placeholder:font-bold text-gray-800 font-bold  "
              type="password"
              placeholder="Password "
            />
            <button className="p-2 rounded-md w-full text-gray-100 ">
              Login
            </button>
          </form>
          <div className="flex flex-col items-center gap-5 my-7 ">
            <div className="w-full flex gap-5 items-center  px-5 font-bold text-gray-800 ">
              <hr className="h-1 w-32 rounded bg-[#A30000]" />
              OR
              <hr className="h-1 w-32 rounded bg-[#A30000]" />
            </div>
            <Link
              href="Login"
              className="p-2 rounded w-[60%] font-bold  text-center  text-gray-300 bg-[#A30000] "
            >
              Log in with Google
            </Link>
          </div>
          <div className="w-full flex flex-col gap-2 items-start  px-5 font-bold text-gray-800 ">
            <div className="w-full flex gap-5 justify-between items-center text-[15px]   font-bold text-gray-900">
              <p>Not yet a member? </p>
              <Link
                href="register"
                className="p-2 px-3 rounded font-bold  text-center  text-gray-300 bg-[#A30000]"
              >
                Join now
              </Link>
            </div>
          </div>
        </div>
      </motion.main>
    </>
  );
};

export default Login;
