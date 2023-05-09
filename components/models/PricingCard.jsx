import Link from "next/link";

export default function Card() {
  return (
    <div className="  flex flex-wrap flex-col gap-[2.5rem] rounded-md py-10 md:flex md:flex-row md:gap-[3rem]  md:justify-center md:items-center   ">
      <div className=" relative rounded-md border-2 border-[#A30000]  shadow-md shadow-black mx-auto h-[30em] w-[300px] px-5 py-10 bg-[#e4dedee0] hover:bg-[gold] hover:text-[#A30000] hover:shadow-lg hover:shadow-[#15254c]  duration-300 transition ease-in-out muhoverEffect md:hover:scale-[1.03] ">
        <div className="mt-[-15px]">
          <h3 className="font-bold text-[20px] py-2 ">Starter</h3>
          <h3 className="font-bold text-[40px]  flex items-center gap-2 ">
            Free <span className="text-[10px] text-[#003087] ">/Month</span>
          </h3>
          <p className="text-[15px] py-2 font-bold ">
            Lunedial Plans
          </p>
        </div>
        <ul className="font-bold  text-[20px] flex flex-col justify-between items-start gap-2 pl-[10px] my-[15px]  ">
          <li className="text-[18px] tracking-tight  ">Chat Functionality</li>
        </ul>
        <Link
          href="/"
          className=" border-[#15254c] border-[2px] bg-[#A30000] absolute bottom-5 text-white w-[70%] text-center mx-auto left-[40px] rounded-full font-bold py-2 hoverEffect "
        >
          Choose Plan
        </Link>
      </div>
      <div className=" relative rounded-md  shadow-md shadow-black mx-auto bg-[#e4dedee0] h-[30em] w-[300px] px-5 py-10 hover:bg-[gold] hover:text-[#A30000] hover:shadow-lg hover:shadow-[#15254c]  duration-300 transition ease-in-out muhoverEffect lg:scale-[1.17] border-2 border-[#A30000] ">
        <span className="absolute top-0 left-0 w-full bg-[#061A40] border-2 border-[#061A40] py-2 rounded-t-md text-center font-bold text-white">
          MOST POPULAR
        </span>
        <div>
          <h3 className="font-bold text-[20px] py-2 ">Pro</h3>
          <h3 className="font-bold text-[40px]  flex items-center gap-2 ">
            $17 <span className="text-[15px] text-[#003087] ">/Month</span>
          </h3>
          <p className="text-[15px] py-2 font-bold ">
            Lunedial Plans
          </p>
        </div>
        <ul className="font-bold  text-[20px] flex flex-col justify-between items-start gap-2 pl-[10px] my-[15px]  ">
          <li className="text-[18px] tracking-tight  ">Chat Functionality</li>
        </ul>
        <Link
          href="/"
          className=" border-[#15254c] border-[2px] bg-[#A30000] absolute bottom-5 text-white w-[70%] text-center mx-auto left-[40px] rounded-full font-bold py-2 hoverEffect "
        >
          Choose Plan
        </Link>
      </div>
      <div className=" relative rounded-md  border-2 border-[#A30000]  shadow-md shadow-black mx-auto bg-[#e4dedee0] h-[30em] w-[300px] px-5 py-10 hover:bg-[gold] hover:text-[#A30000] hover:shadow-lg hover:shadow-[#15254c]  duration-300 transition ease-in-out muhoverEffect md:hover:scale-[1.03] ">
        <div>
          <h3 className="font-bold text-[20px] py-2 ">Pro</h3>
          <h3 className="font-bold text-[40px]  flex items-center gap-2 ">
            $8 <span className="text-[15px] text-[#003087] ">/Month</span>
          </h3>
          <p className="text-[15px] py-2 font-bold ">
            Lunedial Plans
          </p>
        </div>
        <ul className="font-bold  text-[20px] flex flex-col justify-between items-start gap-2 pl-[10px] my-[15px]  ">
          <li className="text-[18px] tracking-tight  ">Chat Functionality</li>
        </ul>
        <Link
          href="/"
          className=" border-[#15254c] border-[2px] bg-[#A30000] absolute bottom-5 text-white w-[70%] text-center mx-auto left-[40px] rounded-full font-bold py-2 hoverEffect "
        >
          Choose Plan
        </Link>
      </div>
    </div>
  );
}
