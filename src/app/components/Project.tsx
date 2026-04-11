import Button from "./Button";
import Image from 'next/image'

type ProjectProps= {
    className?: string;
    imageSource: string; //url for the prokect screenshot
    downloadURL: string;//url for the download page for the project
    repoURL: string;//url for the GitHub repo
    title: string;//Project title
    description: string;//Project Description
    toolsUsed: string[];//Array for the tools used in the project
    languagesUsed: string[];//Array for coding languages used in the project
}

export default function Project({imageSource, downloadURL, repoURL, title, description, toolsUsed, languagesUsed} : ProjectProps){
    return (
        <main className=" flex flex-row gap-40 mt-16">
           {/*Buttons*/}
            <div>
                <Button href={downloadURL}> Download </Button>
                <Button href={repoURL}> Github Repo</Button>
            </div>
                
            {/*Screenshot*/}
            <div>
                <Image
                    src={imageSource}
                    alt="Cover picture for this given project"
                    height={256}
                    width={256}
                />
            </div>
            
            {/*Text*/}
            <div className="">
                <p className="text-5xl text-white">
                    {title}
                </p>

                <p className="text-3xl text-white">
                    {description}
                </p>

                <div className="text-3xl text-white">
                    Tools used:
                    <ul>
                        {toolsUsed.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>

                <div className="text-3xl text-white">
                    Languages used: 
                    <ul>
                            {languagesUsed.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </main>
    );
}