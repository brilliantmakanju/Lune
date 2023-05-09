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
        className={`relative flex h-[5rem] mt-[-15px] ml-[-50px] lg:ml-[-80px] w-[5rem] lg:mt-[10px] lg:h-[10em] lg:w-[10em] `}
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
            className="ml-[-33px] mt-[-10px] lg:ml-[-65px] lg:mt-[-20px] "
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
