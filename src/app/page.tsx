import { Indie_Flower, Montserrat, Raleway } from "next/font/google"
import Card from "@/components/card"
import Socials from "@/components/socials"

const flower = Indie_Flower({
  weight: '400',
  subsets: ['latin'],
})

const montserrat = Montserrat({
  subsets: ['latin']
})

const raleway = Raleway({
  subsets: ['latin']
})

export default function Home() {
  return (
    <main className="bg-black">
      <div className="h-screen flex flex-col justify-center items-center">
        <span className="text-white text-8xl text-center">
          <h1 className={flower.className}>Clayton</h1>
          <h1 className={flower.className}>Van Imschoot</h1>
        </span>
        <span className="text-gray-400 text-5xl text-center">
          <h1 className={montserrat.className}>Full Stack Developer</h1>
        </span>
      </div>
      <div className="h-auto bg-[#f0ebeb] p-4 xl:px-20">
        <span className="text-black text-5xl md:text-8xl">
          <h2 className={flower.className}>Projects<span className="text-base md:text-xl">  click a project to find out more</span></h2>
        </span>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-10 h-auto">
          <Card url='/expat.png' title='Expat-ations' text={`A NextJS project that allows users to search and compare two cities. A travel API is used to return legible data that is easy to navigate for the user. An implementation with OpenAI's GPT is there to allows users to get an idea of what cities they may want to compare.`} alt='Image of Expat-ations search tool' link='https://github.com/Cvanimschoot/Expat-ations' />
          <Card url='/MapProject.png' title='Map Wiki' text={`A map and marker based project, where users could use a set of coordinates to make maps. Verified users can create markers to share with others. Using Postgres and Express with the Google Map API for the backend.`} alt='Image of map navigation page' link='https://github.com/Cvanimschoot/Midterm-Project' />
          <Card url='/SnowWayOut.png' title='Snow Way Out' text={`A small video game created in partnership with the Edmonton Public Library. Snow Way Out is a Unity game built following the guidelines and expectations of EPL. Created with a team of designers, programmers, and business analyst students.`} alt='Image of Snow Way Out game title screen' link='https://github.com/Cvanimschoot/EPL_CapstoneProject_2022' />
        </div>
      </div>
      <div className="h-auto bg-[#f0ebeb] p-4 xl:px-20">
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 h-auto">
          <Card url='/Interviewer.png' title='Interview Schedule App' text={`A simple single-page React app, created in conjunction with Express and PSQL, allowing users to schedule people for an interview for different days of the week.`} alt='Image of Interview Schedule App page' link='https://github.com/Cvanimschoot/scheduler' />
        </div>
      </div>
      <Socials />
    </main>
  )
}
