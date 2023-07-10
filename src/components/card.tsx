import Image from "next/image"
import Link from "next/link";
import { Raleway } from "next/font/google"

const raleway = Raleway({
  subsets: ['latin']
})

type Props = {
  url: string,
  text: string,
  title: string,
  alt: string,
  link: string
};

export default function Card({ url, text, title, alt, link }: Props) {
  return (
    <Link href={link}>
      <div className="h-[26rem] md:h-[32rem] lg:h-[36rem] xl:h-[42rem] shadow-none hover:shadow-xl rounded-xl bg-[#f9f9f9]">
        <div className="flex flex-col items-center justify-around h-[50%] lg:h-[60%]">
          <Image src={url} height={0} width={0} sizes="100vw" alt={alt} className="rounded-xl w-[95%] h-[95%]" />
        </div>
        <div className="px-2 md:px-8 text-center h-[50%] lg:h-[40%]">
          <span className={raleway.className}>
            <p className="text-lg md:text-xl mb-2"><b>{title}</b></p>
            <p className="text-base md:text-lg">{text}</p>
          </span>
        </div>
      </div>
    </Link>

  )
}