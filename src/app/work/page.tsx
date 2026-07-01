"use client"

import WorkButton from '../components/WorkButton';
import Slider from "react-slick"; 
import type { Metadata } from "next";

{/*
export const metadata: Metadata ={
  title: "Work"
};
*/}

{/*
  Slider Breakpoints
*/}
const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
};

const buttonData = [
{
  href: "/portfolio",
  imageSource: "/BurgerWBPic.png",
  name: "My Portfolio Site",
  engine: "Next.js",
  date: "7/1/2026"
},
{
  href: "/burgers",
  imageSource: "/BurgerWBPic.png",
  name: "Bald Eagle Burgers",
  engine: "Unreal Engine 5",
  date: "7/5/2024"
},
{
  href: "/chaos",
  imageSource: "/ChaosWBPic.jpg",
  name: "Chaos at Circus Baby's",
  engine: "Unreal Engine 5",
  date: "12/5/2023"
},
{
  href: "/Talimentals",
  imageSource: "/TalimentalsWBPic.png",
  name: "Talimentals",
  engine: "Unity",
  date: "12/8/2022"
},
{
  href: "/gamder",
  imageSource: "/GamderWBPic.png",
  name: "Gamder",
  engine: "React Native",
  date: "5/2/23"
},
{
  href: "/TimeForce",
  imageSource: "/TimeForceWBPic.png",
  name: "Power Rangers: Quantum Quest",
  engine: "Unity",
  date: "2/22/23"
},
];

export default function Work(){
    return (
     <main className="flex justify-center items-center h-screen">
       <div className="w-full max-w-7xl ml-8">
          <Slider {...sliderSettings}>
            {buttonData.map((buttonData) => (
            <WorkButton
              key={buttonData.href}
              {... buttonData}
              />
          ))}
        </Slider>
       </div>
      
     </main>
  );
}