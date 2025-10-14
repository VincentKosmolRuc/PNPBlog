'use client'

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from 'next/navigation';

export default function NavLink({path, title}) {

const currentPath = usePathname()

    return(
        <Link href={path} className={clsx(
            currentPath === path? " text-orange-400 font-bold bg-zinc-950" : "hover:bg-zinc-600 text-slate-300 hover:text-slate-50",         
            "py-2 px-6 rounded-lg"
        )}>
            {title}
        </Link>
    )
}