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
    const baseStyles = "w-48 h-180 bg-white font-bold rounded-lg cursor-pointer text-base m-3 flex flex-col justify-center items-center";

        return(
            <Link href={href as string}>
                <div  className={`${baseStyles} ${className || ""}`}>
                    <Image
                        src={imageSource}
                        alt="Profile picture of the website owner"
                        width={263}
                        height={459}
                    /> 
                    <ul>
                        <li>{name}</li>
                        <li>{engine}</li>
                        <li>{date}</li>
                    </ul>
                </div>
            </Link>
        );
    
}