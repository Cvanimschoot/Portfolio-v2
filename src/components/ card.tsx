import Image from "next/image"
import { Raleway } from "next/font/google"

const raleway = Raleway({
  subsets: ['latin']
})

type Props = {
  url: string,
  text: string,
  title: string
};

export default function Card({ url, text, title }: Props) {
  return (
    <div className="h-[26rem] md:h-[30rem] shadow-none hover:shadow-xl rounded-xl bg-[#f9f9f9]">
      <div className="flex flex-col items-center justify-around h-[50%]">
        <Image src={url} height={0} width={0} sizes="100vw" alt="Screenshot of search field for Expat-ations" className="rounded-xl w-[95%] h-[95%]" />
      </div>
      <div className="px-2 md:px-8 py-2 text-center h-[50%] flex items-center">
        <span className={raleway.className}>
          <p className="text-lg md:text-xl mb-2"><b>{title}</b></p>
          <p className="text-base md:text-lg">{text}</p>
        </span>
      </div>
    </div>
  )
}