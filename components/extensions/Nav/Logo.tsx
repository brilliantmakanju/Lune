import Image from "next/image";

const Logo = () => {
  return (
    <div className="relative flex h-[15rem] mt-[25px] ml-[-80px] w-[15rem]">
      <Image src={"/logo/shortlogo.png"} width={200} height={200} alt="Logo" />
      <Image src={"/logo/logoname.png"} className="ml-[-85px] mt-[-32px] " width={200} height={200} alt="Logo" />
    </div>
  );
};

export default Logo;
