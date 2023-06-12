import Link from "next/link";
import { usePathname } from "next/navigation";


type Props = {
    path: string,
    text: string
}

const NavLink = ({ path, text }: Props) => {
    const pathname = usePathname();

    return (
        <Link 
            href={path} 
            className={`py-2 border-b-2 
                ${pathname == path ? "border-neutral-900 dark:border-white" : "border-transparent"} 
                text-neutral-900 dark:text-white transition-all ease-in
            `}
        >
            <>{text}</>
        </Link>
    )
}

export default NavLink



