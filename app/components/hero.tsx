import React from "react";  
import { Arrow } from "./arrow";

export function Hero( ){ 
    return <>
    <div className="flex flex-col items-center  sm:w-5/6">
        <p className="tracking-widest font-normal">DYNAMIC WEB MAGIC WITH NEXT.JS</p>
        <h1 className="text-7xl font-bold text-center m-8 inline">
            Transforming Concepts into Seamless <p className="inline text-purple-300 ">User Experiences</p>
        </h1>
        <h2 className="text-zinc-300 text-xl">
            Hi! I am  Amrit , A Mern Stack Dev based in Delhi
        </h2>
        <button className="bg-gradient-to-r from-slate-700 to-gray-800 p-2 rounded-2xl border-2 border-zinc-700 px-8 py-4 mt-5">See My Work <Arrow/> </button>
    </div>
    </>
}
export default Hero