import Link from "next/link";
import {
  FaFacebook,
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import dynamic from "next/dynamic";

const MapCont = dynamic(() => import("../../components/models/map/map"), {
  ssr: false,
});

const Contact = () => {
  return (
    <>
      <main className="pt-[100px] h-auto px-[20px] lg:px-[225px] flex flex-col  lg:grid lg:grid-cols-2 lg:pt-[150px] lg:flex-shrink-0 lg:justify-start lg:items-start lg:gap-[200px] ">
        <div className="w-[100%]  h-auto py-[10px] px-[20px] lg:pb-[50px] ">
          <h3 className="lg:text-[50px] text-[30px] lg:leading-[1.4]  ">
            Feel free to keep in touch
          </h3>
          <p className="text-left mt-[10px] lg:mt-[20px] lg:text-[20px] lg:w-[90%]   ">
            {"We'd"} love to hear from you! Whether you have a question,
            feedback, or just want to say hi, {"we're"} here for you. You can
            reach us at:
            <ul className="grid grid-cols-5 gap-1 lg:w-[40%] py-[10px]  place-content-center items-start justify-start text-left lg:grid-cols-5 lg:gap-[1px] ">
              <Link href={"/"}>
                <li className="text-[30px] ">
                  <FaInstagram />
                </li>
              </Link>
              <Link href={"/"}>
                <li className="text-[30px] ">
                  <FaTwitter />
                </li>
              </Link>
              <Link href={"/"}>
                <li className="text-[30px] ">
                  <FaYoutube />
                </li>
              </Link>
              <Link href={"/"}>
                <li className="text-[30px] ">
                  <FaFacebookF />
                </li>
              </Link>
              <Link href={"/"}>
                <li className="text-[30px] ">
                  <FaTiktok />
                </li>
              </Link>
            </ul>
          </p>
        </div>
        <form className="flex w-[100%] flex-col justify-center rounded-[30px] items-start gap-4 px-[5px]  text-black  p-10 lg:px-[50px] lg:w-[100%]  ">
          <div className="flex flex-col justify-start items-start  w-full ">
            <label
              htmlFor="name"
              className="text-[25px] lg:pl-[10px] font-bold "
            >
              Name
            </label>
            <input
              type={"text"}
              id="name"
              className="w-full  h-[3em] bg-transparent  px-5 rounded-lg border-2 border-[#FFD639] outline-[#FFD639] pl-3 s font-bold "
            />
          </div>
          <div className="flex flex-col justify-start items-start  w-full ">
            <label
              htmlFor="email"
              className="text-[25px] lg:pl-[10px] font-bold "
            >
              Email
            </label>
            <input
              type={"email"}
              id="email"
              className="w-full  h-[3em] bg-transparent  px-5 rounded-lg border-2 border-[#FFD639] outline-[#FFD639] pl-3 s font-bold "
            />
          </div>
          <div className="flex flex-col justify-start items-start  w-full ">
            <label
              htmlFor="subject"
              className="text-[25px] lg:pl-[10px] font-bold "
            >
              Subject
            </label>
            <input
              type={"text"}
              id="subject"
              className="w-full  h-[3em] bg-transparent  px-5 rounded-lg border-2 border-[#FFD639] outline-[#FFD639] pl-3 s font-bold "
            />
          </div>
          <div className="flex flex-col justify-start items-start  w-full ">
            <label
              htmlFor="msg"
              className="text-[25px] lg:pl-[10px] font-bold "
            >
              Message
            </label>
            <textarea
              id="msg"
              className="w-full  h-[8.5em] bg-transparent  px-5 rounded-lg border-2 border-[#FFD639] outline-[#FFD639] pl-3 s font-bold "
            />
          </div>
          <button className="py-4 px-[8rem] border-2  text-[white]  ">
            Submit
          </button>
        </form>
      </main>
      <section className="px-[10%]">
        <MapCont />
      </section>
    </>
  );
};

export default Contact;
