import Logo from "@/components/extensions/Nav/Logo";
import { NextSeo } from "next-seo";
import Image from "next/image";
import Link from "next/link";
import Contact from "../contact";

const AboutDoc = () => {
  return (
    <>
      <NextSeo
        title="About Lunedial - The Future Online Dating"
        description="Learn more about Lunedial, the exciting new dating site that's set to challenge Tinder and change the online dating game forever"
      />
      <main className=" lg:pt-[68px] ">
        <h1 className="lg:text-[50px] pl-[20px] lg:pl-[3%] bg-[#A30000] py-[140px] text-[60px] lg:py-[100px] text-white  ">
          About{" "}
        </h1>
        <section className="text-[20px] tracking-tighter flex justify-start items-center lg:pl-[3%] px-[20px] pt-[40px] flex-wrap gap-10 ">
          <div className="lg:w-[100%] lg:px-[10px] lg:tracking-wide ">
            <div className="flex flex-col gap-1 ">
              <h3 className="pb-[15px] lg:text-[30px]  ">Our vision</h3>
              <div className="bg-[#A30000] w-[200px] h-[3px] rounded-lg mt-[-10px] mb-[20px] " />
            </div>
            <p className=" lg:pl-[15px] lg:pb-[100px] lg:text-[25px]  lg:tracking-tight lg:pr-[150px]" >
              Lunedial is the next big thing in online dating. {"We're"} here to
              offer an alternative to the swiping culture that dominates other
              dating apps. We believe that true connections happen when people
              take the time to get to know each other, and {"that's"} why{" "}
              {"we've"}
              created a platform that encourages meaningful conversations and
              authentic connections.
            </p>
          </div>
          {/* <img src="lunedial-logo.png" alt="Lunedial Logo" /> */}

          {/* <div>
            <Link href={"/"}>
              <div
                className={`relative flex h-[25rem] mt-[-15px] ml-[-300px] lg:ml-[-80px] w-[25rem] lg:mt-[10px] lg:h-[15em] lg:w-[15em] `}
              >
                <Image
                  src={"/logo/shortlogo.png"}
                  width={500}
                  height={500}
                  alt="Logo"
                />
                <Image
                  src={"/logo/logoname.png"}
                  className="ml-[-180px] mt-[-40px] lg:ml-[-120px] lg:mt-[-30px] "
                  width={500}
                  height={500}
                  alt="Logo"
                />
              </div>
            </Link>
          </div> */}
        </section>
        <section
          id="features"
          className="flex justify-start items-start text-left flex-col gap-5 lg:grid lg:grid-cols-2 lg:gap-[200pxs] lg:px-[6.5%] pt-[20px]  "
        >
          <div className="w-full  px-[20px] ">
            <h2 className="flex text-[36px] justify-start items-start text-left">
              Meet the team
            </h2>
            <p className="mt-[10px] lg:w-[80%] lg:text-[20px] " >
              Lunedial is the next big thing in online dating. {"We're"} here to
              offer an alternative to the swiping culture that dominates other
              dating apps. We believe that true connections happen when people
              take the time to get to know each other, and {"that's"} why{" "}
              {"we've"}
              created a platform that encourages meaningful conversations and
              authentic connections.
            </p>
          </div>
          <div className="relative w-[22.5em] lg:w-[40em] h-[22em] rounded-lg  overflow-hidden ml-[20px]  " >
            <Image
              src={"/loverBg2.jpg"}
              alt={"Company"}
              fill
              className="absolute top-0 left-0 object-cover "
            />
          </div>
        </section>
        {/* <section id="team">
          <h2>Meet the Team</h2>
          <p>
            Our team is made up of passionate individuals who believe in the
            power of meaningful connections. We come from diverse backgrounds
            and bring a range of skills to the table, but we're united by our
            commitment to making online dating better.
          </p>
          <img src="team-photo.jpg" alt="Lunedial Team Photo" />
        </section> */}
      </main>
    </>
  );
};

export default AboutDoc;
