import Link from "next/link"
import Image from 'next/image'

type ButtonProps = {
    href: string;
    className?: string;
    imageSource: string;
    name: string;
    engine: string;
    date: string;
}

export default function WorkButton({href, className, imageSource, name, engine, date}: ButtonProps)
{
    const baseStyles = "w-72 h-180 bg-white font-bold rounded-lg cursor-pointer text-base m-3 flex flex-col justify-center items-center text-center";

        return(
            <Link href={href as string}>
                <div  className={`${baseStyles} ${className || ""}`}>
                    <div className="relative w-full h-2/3">
                         <Image
                            src={imageSource}
                            alt="Cover picture for this given project"
                            fill
                        /> 
                    </div>
                    
                   <ul>
                        <li>{name}</li>
                        <li>{engine}</li>
                        <li>{date}</li>
                    </ul>
                </div>
            </Link>
        );
    
}