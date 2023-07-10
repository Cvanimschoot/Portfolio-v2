import Image from "next/image"
import Link from "next/link"

export default function Socials() {
  return (
    <div className="bg-[#f0ebeb] h-[5rem] flex justify-center items-center">
      <Link href='https://github.com/Cvanimschoot'><Image src='/github-mark.svg' height={0} width={0} sizes="100vw" alt="Screenshot of search field for Expat-ations" className="rounded-xl w-[auto] h-[3rem]" /></Link>
      <Link href='https://www.linkedin.com/in/clayton-van-imschoot/'><Image src='/LI-In-Bug.png' height={0} width={0} sizes="100vw" alt="Screenshot of search field for Expat-ations" className="rounded-xl w-[auto] h-[3rem] ml-3" /></Link>
    </div>
  )
}