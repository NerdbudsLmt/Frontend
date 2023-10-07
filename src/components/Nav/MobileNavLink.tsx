import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";


const variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: 100 },
            delay: 0.5,
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 }
        }
    }
};


const MobileNavLink = ({ path, text, className, isOpen, ...props }: any) => {
    const pathname = usePathname();

    return (
        <motion.div
            className={`px-4`}
            animate={isOpen ? "open" : "closed"}
            variants={variants}
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
        >
            <Link 
                className={`${!className ? 
                    `${pathname == path ? "border-white" : "border-transparent"} py-2 border-b-2 text-white transition-all ease-in`
                    : className}`}
                href={path} 
                {...props}
            >
                <>{text}</>
            </Link>
        </motion.div>
    );
};

export default MobileNavLink;
