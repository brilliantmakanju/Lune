import Link from "next/link";

const Legal = () => {
  return (
    <div className="flex flex-col gap-1 items-start justify-start text-center  ">
      <h4 className=" text-[15px] text-left flex justify-start items-start ">
        Legal
      </h4>
      <ul className="flex flex-col w-[100%] gap-1 items-start justify-start text-left text-[10px] lg:text-[20px ">
        <li>Privacy</li>
        <Link href="/">
          <li>About us</li>
        </Link>
        <Link href="contact">
          <li>Contact us</li>
        </Link>
        <li>Terms</li>
        <li>Cookie Policy</li>
      </ul>
    </div>
  );
};

export default Legal;
