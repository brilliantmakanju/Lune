import Link from "next/link";

const Intro = () => {
  return (
    <section
      className="h-screen w-[100%] ml-[0px] flex flex-col gap-10 justify-center items-center relative md:hidden "
      style={{ background: "url('loverBg2.jpg')" }}
    >
      <h2 className="text-[90px] w-[50%] tracking-wide leading-[5rem] text-center text-[#FFD639]  ">
        Join Now
      </h2>
      <div className="absolute flex flex-col justify-center items-center gap-10 bottom-[70px] ">
        <Link
          href="/"
          className="flex font-bold bg-[#A30000] py-4 px-10 w-[150%] items-center justify-center text-center text-[#FFD639]  rounded-full "
        >
          Create account
        </Link>
        <Link
          className="flex font-bold border-2  border-[#A30000] py-4 px-10 w-[150%] items-center justify-center text-[#FFD639] text-center rounded-full "
          href="/"
        >
          Login
        </Link>
      </div>
    </section>
  );
};

export default Intro;
