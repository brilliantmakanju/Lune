const Contact = () => {
  return (
    <>
      <main className="pt-[100px]  flex flex-col justify-center items-center px-[10px] h-screen w-full  ">
        <form className="flex w-[30em] flex-col justify-center rounded-[30px] items-start gap-4 px-[55px] mt-[-100px] lg:bg-[gold] p-10 ">
          <h3 className="text-left flex justify-start items-start tracking-tighter font-extrabold text-[30px]  ">
            Contact Us
          </h3>
          <p className="text-center font-bold  ">
            {"We'd"} love to hear from you! Whether you have a question,
            feedback, or just want to say hi, {"we're"} here for you. You can
            reach us at:
          </p>
          <input
            type="text"
            name=""
            id=""
            placeholder="Name"
            className="h-[3em] bg-transparent  px-5 rounded-full pl-3 w-[100%] border-2 border-[#A30000] placeholder:text-gray-800 placeholder:font-bold text-gray-800 font-bold "
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="Email"
            className="h-[3em] bg-transparent  px-5 pl-3 w-[100%] border-2 border-[#A30000] rounded-full  placeholder:text-gray-800 placeholder:font-bold text-gray-800 font-bold "
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="Subject"
            className="h-[3em] rounded-full bg-transparent  px-5 pl-3 w-[100%] border-2 border-[#A30000] placeholder:text-gray-800 placeholder:font-bold text-gray-800 font-bold "
          />
          <textarea
            placeholder="Message"
            className="h-[12.5em] border-2 border-[#A30000]  bg-transparent w-[100%] placeholder:text-gray-800 placeholder:font-bold text-gray-800 font-bold rounded-[20px] pt-[10px] px-[10px] overflow-hidden "
          ></textarea>
          <button className="py-4 px-10 border-2 border-[#141313e7] ">
            Submit
          </button>
        </form>
      </main>
    </>
  );
};

export default Contact;
