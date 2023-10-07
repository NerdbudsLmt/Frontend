import Link from "next/link";
import { usePathname } from "next/navigation";


type Props = {
    path: string,
    text: string,
    className?: string
}

const NavLink = ({ path, text, className, ...props }: Props) => {
    const pathname = usePathname();

    return (
        <Link 
            className={`${!className ? 
                `${pathname == path ? "border-white" : "border-transparent"} py-2 border-b-2 text-white transition-all ease-in`
                : className}`}
            href={path} 
            {...props}
        >
            <>{text}</>
        </Link>
    )
}

export default NavLink



