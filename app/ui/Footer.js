import { Youtube } from "lucide-react";
import { Instagram } from "lucide-react";
import { Mail } from "lucide-react";
import { Medal } from "lucide-react";

export default function Footer(){
    return(
        <div>
            <footer className="mt-auto bg-zinc-800 text-white text-center"> 
                <div className="flex items-center justify-between p-3">
                    <ul className="flex gap-10 items-center mx-auto"> 
                        <a href="https://www.youtube.com/@PaceNProgress"><Youtube /></a>
                        <a href="https://www.instagram.com/pacenprogress/"><Instagram/></a>
                        <a href="https://www.strava.com/athletes/120574008"><Medal/></a>
                        <a href="/Contact"><Mail/></a>
                    </ul>
                </div>
                <p>&copy; {new Date().getFullYear()} Pace &apos;N&apos; Progress. All rights reserved</p> 
            </footer>
        </div>
    )
}