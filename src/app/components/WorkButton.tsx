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
    const baseStyles = "w-24 md:w-45 lg:w-72 h-90 md:h-135 lg:h-180 bg-white font-bold rounded-lg cursor-pointer text-base m-3 flex flex-col justify-center items-center text-center";

        return(
            <Link href={href as string}>
                <div  className={`${baseStyles} ${className || ""}`}>
                    <div className="relative min-w-2/3 md:w-full h-1/2 md:h-2/3">
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