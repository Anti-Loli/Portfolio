"use client"

import IconButton from "./IconButton";
import Image from 'next/image'
import { useRouter } from "next/navigation";
import Slider from "react-slick"; 


type ProjectProps= {
    className?: string;
    imageSources: string[];//array for image slider urls
    downloadURL: string;//url for the download page for the project
    repoURL: string;//url for the GitHub repo
    title: string;//Project title
    description: string;//Project Description
    toolsUsed: string[];//Array for the tools used in the project
    languagesUsed: string[];//Array for coding languages used in the project
}

export default function Project({imageSources, downloadURL, repoURL, title, description, toolsUsed, languagesUsed} : ProjectProps){
    
    const router = useRouter();

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <main className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
           {/*Buttons*/}
            <div className="ml-10 lg:ml-16">
                <IconButton imageSource = "/ButtonIcons/download.png" href={downloadURL}> Download </IconButton>
                <IconButton imageSource = "/ButtonIcons/github.png" href={repoURL}> Github Repo</IconButton>
                <IconButton imageSource="/ButtonIcons/back.png" onClick={router.back}>Back</IconButton>
            </div>
                
            {/*Screenshot*/}
            <div  className="relative w-full h-100">
                <Slider {...sliderSettings}>
                    {imageSources.map((item, index) => (
                            <Image
                                key = {index}
                                src={item}
                                alt="Screenshot of this given project"
                                height={1080}
                                width={720}
                            />
                        ))}
                </Slider>
                
                
            </div>
            
            {/*Text*/}
            <div className=" text-white text-center xl:text-left">
                <p className="text-5xl pb-2">
                    {title}
                </p>

                <p className="text-2xl max-w-3xl pb-2">
                    {description}
                </p>

                <div className="text-3xl pb-2">
                    Tools used:
                    <ul className="text-2xl pb-2">
                        {toolsUsed.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>

                <div className="text-3xl pb-2">
                    Languages used: 
                    <ul className="text-2xl">
                            {languagesUsed.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </main>
    );
}