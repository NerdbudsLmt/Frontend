import { motion } from "framer-motion";
import MobileNavLink from "@/components/Nav/MobileNavLink";
import { links } from "@/components/Nav/links";


const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
};

export const Navigation = ({ isOpen, closeNav }: any) => (
    <motion.div 
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        className=""
        // className={`${isOpen ? "bg-white dark:bg-app-pblue border-2 border-neutral-700/20 dark:border-white/10" : ""}`}
    >
        {links?.map((link, index) => (
            <MobileNavLink 
                key={index} 
                className="text-[3.2rem] sm:text-[3.7rem] uppercase cursor-pointer font-semibold"
                onClick={() => closeNav()}
                isOpen={isOpen}
                {...link} 
            />
        ))}
    </motion.div>
);

const itemIds = [0, 1, 2, 3, 4];