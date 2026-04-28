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
        <main className="flex flex-1 gap-16  items-center ml-30">
           {/*Buttons*/}
            <div>
                <Button href={downloadURL}> Download </Button>
                <Button href={repoURL}> Github Repo</Button>
            </div>
                
            {/*Screenshot*/}
            <div >
                <Image
                    src={imageSource}
                    alt="Screenshot of this given project"
                    width={1000}
                    height={720}
                />
            </div>
            
            {/*Text*/}
            <div className=" text-white">
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