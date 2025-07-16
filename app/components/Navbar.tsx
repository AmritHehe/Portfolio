import React from "react";
// import Link from "next/link";
// import Introduction from "./Introduction";
export function Navbar(){ 

    return <>
        <nav className="absolute border-1 border-zinc-800 flex justify-between rounded-xl p-4 m-6 inner">
             <a href="#about" >  
             about
            </a>
            <button className="pl-8">Projects</button>
            <button className="px-8">Testimonials</button>
            <button className="pr-8">Contact</button>
        </nav>
    </>
}
export default Navbar