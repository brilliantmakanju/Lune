import Link from "next/link";
import { useRouter } from "next/router";

const Links = () => {
  const router = useRouter();

  return (
    <ul
      className={`lg:flex gap-5 justify-start items-center ml-[50px]  font-bold mt-[-5px] hidden ${
        router.route === "/" ? "text-[#cec9c9]" : "text-[#ffffff]"
      } `}
    >
      <li>
        <Link href={"/"}>Products</Link>
      </li>
      <li>
        <Link href={"/"}>Learn</Link>
      </li>
      <li>
        <Link href={"/"}>Support</Link>
      </li>
      <li>
        <Link href={"/"}>Download</Link>
      </li>
    </ul>
  );
};

export default Links;
