import Link from "next/link"

type ButtonProps = {
    children: React.ReactNode;
    href?: string;
    onClick?: () => void;
    className?: string;
}

export default function Button({children, href, onClick, className}: ButtonProps)
{
    const baseStyles = "w-72 h-48 bg-[#107C10] text-white font-bold rounded-lg cursor-pointer text-base block m-3";

    if (href)
    {
        return(
            <Link href={href as string} className={`${baseStyles} ${className || ""}`}>
                {children}
            </Link>
        );
    }

    return(
        <button onClick={onClick} className={`${baseStyles} ${className || ""}`}>
            {children}
        </button>
    );
}