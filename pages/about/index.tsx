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
      <main className="pt-[100px] px-[20px] ">
        <section className="text-[20px] tracking-tighter flex justify-center items-center flex-wrap gap-10 ">
          <div className="lg:w-[50%]">
            <h1>About Lunedial</h1>
            <p>
              Lunedial is the next big thing in online dating. We're here to
              offer an alternative to the swiping culture that dominates other
              dating apps. We believe that true connections happen when people
              take the time to get to know each other, and that's why we've
              created a platform that encourages meaningful conversations and
              authentic connections.
            </p>
          </div>
          {/* <img src="lunedial-logo.png" alt="Lunedial Logo" /> */}

          <div>
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
          </div>
        </section>
        <section
          id="features"
          className="flex justify-center items-center text-left flex-col gap-5  "
        >
          <h2 className="flex text-[36px] justify-start items-start text-left">
            Features
          </h2>
          <ul className="text-[20px] flex flex-col justify-center items-start gap-2 ">
            <li className="py-3 hover:text-[white] text-[#211f1f] rounded-md px-3 duration-300 ease-in-out transition hover:bg-[#A30000] ">
              Smart matching algorithm that connects users based on shared
              interests and values
            </li>
            <li className="py-3 hover:text-[white] text-[#211f1f] rounded-md px-3 duration-300 ease-in-out transition hover:bg-[#A30000]  ">
              Rich user profiles with photos, videos, and detailed bios
            </li>
            <li className="py-3 hover:text-[white] text-[#211f1f] rounded-md px-3 duration-300 ease-in-out transition hover:bg-[#A30000] ">
              Chat feature that allows users to get to know each other before
              meeting in person
            </li>
            <li className="py-3 hover:text-[white] text-[#211f1f] rounded-md px-3 duration-300 ease-in-out transition hover:bg-[#A30000] ">
              Community events and activities that bring users together in a
              fun, low-pressure environment
            </li>
          </ul>
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
        <section id="contact">
          <Contact />
        </section>
      </main>
    </>
  );
};

export default AboutDoc;
