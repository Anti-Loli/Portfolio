import Link from "next/link"
import Image from 'next/image'

type ButtonProps = {
    children?: React.ReactNode;
    href?: string;
    onClick?: () => void;
    className?: string;
    imageSource: string;
}

export default function IconButton({children, href, onClick, className,imageSource}: ButtonProps)
{
    const baseStyles = "w-72 h-48 bg-[#107C10] text-white font-bold rounded-lg cursor-pointer m-3 flex flex-col";

    if (href)
    {
        return(
            <Link href={href as string} className={`${baseStyles} ${className || ""}`}>
                <div className="flex flex-1 items-center justify-center">
                    <Image
                        src={imageSource}
                        alt="Icon for the given button"
                        width={96}
                        height={96}
                    />
                </div>

                <div className="pl-2 text-2xl">
                    {children}
                </div>
            </Link>
        );
    }

    return(
        <button onClick={onClick} className={`${baseStyles} ${className || ""}`}>
            <Image
                    src={imageSource}
                    alt="Icon for the given button"
                    width={64}
                    height={64}
                />
            {children}
        </button>
    );
}