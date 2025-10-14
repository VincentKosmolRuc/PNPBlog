import Link from "next/link"; 

export default function Button({path, title}) { 
    return(
        <Link href={path} className= " text-white font-bold bg-linear-to-r from-cyan-500 to-blue-500 hover:from-cyan-900 hover:to-blue-800 hover:text-slate-50 py-2 px-6 rounded-lg" >
            {title}
        </Link>
    )
}