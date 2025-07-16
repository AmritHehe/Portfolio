import React from "react";
import { tangerine } from "./fonts";
import { Mail } from "./ui/mail";
import { Instagram } from "./ui/instagram";
import Link from "next/link";
import { Linkedin } from "./ui/linkedin";
import { Twitter } from "./ui/twitter";
export function Connect(){ 
    return<>
        <div className = {`${tangerine.variable} h-screen w-screen flex flex-col items-center justify-center`}  > 
            <h1 className="font-tangerine text-3xl sm:text-5xl md:text-7xl m-5  scale-150">
                Build Better. Together.
            </h1>
            <h2 className="m-2 text-sm sm:text-xl  sm:my-12 ">
                Got a project in mind? I’d love to hear about it.
            </h2>
            <div className="flex w-sm sm:w-md md:w-xl px-5 py-5   md:w-xs items-center md:px-8 md:py-7 md:scale-140 justify-between">
                <Link href="mailto:amritbarsiphone@gmail.com" target="_blank"><Mail/> </Link>
                <Link href= "https://www.linkedin.com/in/amrit-barsaiyan" target="_blank"><Linkedin/></Link>
                <Link href= "https://www.instagram.com/amrit_barsaiyan/" target="_blank"><Instagram/></Link>
                <Link href="https://x.com/amrit_wow" target="_blank"><Twitter/></Link>
                
            </div>
                
            
            
        </div>
    </>
}