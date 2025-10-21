'use client'

import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function NavLink({path, title}) {

const currentPath = usePathname()
console.log(`currentpath${currentPath}`);
console.log(`path${path}`);
    return(
        <Link href={path} 
        
        className={currentPath === path || path.includes("blog")  && currentPath.includes("blog") ?  ("py-2 px-6 rounded-lg text-orange-400 font-bold bg-zinc-950") : 
            ("py-2 px-6 rounded-lg hover:bg-zinc-600 text-slate-300 hover:text-slate-50") 
        }
        >
            {title}
        </Link>
    )
}