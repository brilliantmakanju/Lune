import Link from "next/link"

const CTA = () => {
  return (
    <div className="lg:flex justify-end items-center hidden">
      <Link className="flex justify-center items-center bg-white text-[black] py-2 px-7 rounded-full font-bold " href="/" >Log in</Link>
    </div>
  )
}

export default CTA