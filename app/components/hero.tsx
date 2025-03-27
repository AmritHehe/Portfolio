
import React from "react";  
//import { useState } from "react";
import { Arrow } from "./arrow";
import { Spotlight } from "./ui/spotlight";
//import { Boxes} from "./ui/Background-boxes";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import * as motion from "motion/react-client"
//import { anticipate, easeIn, hover } from "motion";


export function Hero( ){ 
    

    // const [hovered , isHovered] = useState(false)
    return <>
    {/* <BoxesCore /> */}
    {/* <Boxes/> */}
    
    
    
    <div className="flex flex-col items-center  sm:w-5/6 z-20">
    <Spotlight className="top-0  md:top-40 h-screen " fill='white'/>
    <Spotlight className="scale-x-[-1] top-0  md:top-40 h-screen" />
        <p className="tracking-widest font-normal">DYNAMIC WEB MAGIC WITH NEXT.JS</p>
        <h1 className="text-5xl my-24 sm:text-6xl md:text-7xl font-bold text-center m-8 inline">
            Transforming Concepts into Seamless <p className="inline text-purple-300 ">User Experiences</p>
        </h1>
        {/* <h2 >
            Hi! I am  Amrit , A Mern Stack Dev based in Delhi
        </h2> */}
        <TextGenerateEffect className="text-zinc-300 text-2xl" words ="Hi! I am  Amrit , A Mern Stack Dev based in Delhi" />
        <motion.div drag dragConstraints={{ 
            left : 0 , 
            right : 0, 
            top : 0 , 
            bottom : 0
        }}  whileHover = {{scale : 1.2}} className="bg-gradient-to-r from-slate-700 to-gray-800 p-2 rounded-2xl border-2 border-zinc-700 px-6 py-4 mt-10 ab"> <p className="inline-block">See My Work </p> <motion.div  whileHover={{rotate : 120}}  drag dragConstraints={{ 
            left : 0 , 
            right : 0, 
            top : 0 , 
            bottom : 0
        }}  className=" px-1 inline-block"><Arrow/></motion.div>  </motion.div>
         
    </div>
    {/* <Boxes className="opacity-25"/> */}
    </>
}
export default Hero 