import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  short: boolean;
  long: boolean;
}

const Logo: React.FC<LogoProps> = ({ short, long }) => {
  return (
    <Link href={"/"}>
      <div
        className={`relative flex h-[10rem] mt-[10px] ml-[-70px] lg:ml-[-80px] w-[10rem]  `}
      >
        {short ? (
          <Image
            src={"/logo/shortlogo.png"}
            width={200}
            height={200}
            alt="Logo"
          />
        ) : (
          <></>
        )}
        {long ? (
          <Image
            src={"/logo/logoname.png"}
            className="ml-[-65px] mt-[-20px] "
            width={200}
            height={200}
            alt="Logo"
          />
        ) : (
          <></>
        )}
      </div>
    </Link>
  );
};

export default Logo;
