// import { useTheme } from "next-themes";
import { motion } from "framer-motion";


const Path = (props: any) => {
    // const { theme } = useTheme();
    // console.log("theme:", theme);

    return   (<motion.path
        fill="transparent"
        strokeWidth="3"
        stroke= "#f5f5f5"
        // stroke={`${(theme === "light" || theme === "") ? "#171717" : "#f5f5f5"}`}
        strokeLinecap="round"
        {...props}
    />)
}

const NavToggler = ({ className, isOpen, toggle }: any) => (
    <button 
        className={`${className ? className: ""} cursor-pointer`}
        onClick={toggle}
    >
        <svg 
            width="29" 
            height="29" 
            viewBox="0 0 22 22"
        >
            <Path
                animate={isOpen ? "open" : "closed"}
                variants={{
                    closed: { d: "M 2 2.5 L 20 2.5" },
                    open: { d: "M 3 16.5 L 17 2.5" }
                }}
            />
            <Path
                animate={isOpen ? "open" : "closed"}
                d="M 2 9.423 L 20 9.423"
                variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 }
                }}
                transition={{ duration: 0.1 }}
            />
            <Path
                animate={isOpen ? "open" : "closed"}
                variants={{
                    closed: { d: "M 2 16.346 L 20 16.346" },
                    open: { d: "M 3 2.5 L 17 16.346" }
                }}
            />
        </svg>
    </button>
);

export default NavToggler
