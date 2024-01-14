// import Link from "next/link";
// import { usePathname } from "next/navigation";

// type Props = {
//   path: string;
//   text: string;
//   className?: string;
// };

// const NavLink = ({ path, text, className, ...props }: Props) => {
//   const pathname = usePathname();

//   return (
//     <Link
//       className={`${
//         !className ? `${ pathname == path ? "border-white" : "border-transparent" } py-2 border-b-2 text-white transition-all transform hover:scale-110 ease-in` : className }`}
//       href={path}
//       {...props}
//     >
//       <>{text}</>
//     </Link>
//   );
// };

// export default NavLink;

import Link from 'next/link'
import { usePathname } from 'next/navigation'

type Props = {
  path: string
  text: string
  className?: string
}

const NavLink = ({ path, text, className, ...props }: Props) => {
  const pathname = usePathname()

  const [project, pal] = text.split(' ')

  const conditionalClassName = !className
    ? `${
        pathname == path ? 'border-white' : 'border-transparent'
      } py-2 border-b-2 text-white transition-all transform hover:scale-110 ease-in`
    : className

  return (
    <Link className={conditionalClassName} href={path} {...props}>
      <>
        <span className={project === 'Project' ? 'text-[#55BDFF]' : ''}>
          {project}
        </span>{' '}
        <span className={pal === 'Pal' ? 'text-[#F9D262]' : ''}>{pal}</span>
      </>
    </Link>
  )
}

export default NavLink
