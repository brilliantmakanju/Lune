import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"}>
      <div className="relative flex h-[15rem] mt-[25px] ml-[-80px] w-[15rem]">
        <Image
          src={"/logo/shortlogo.png"}
          width={200}
          height={200}
          alt="Logo"
        />
        <Image
          src={"/logo/logoname.png"}
          className="ml-[-85px] mt-[-32px] "
          width={200}
          height={200}
          alt="Logo"
        />
      </div>
    </Link>
  );
};

export default Logo;
