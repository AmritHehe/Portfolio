import React from "react";
import * as motion from "motion/react-client"
//import { anticipate } from "motion";
import { tangerine } from "./fonts";

export function Introduction(){ 
    return <>
    <motion.div initial={{
        opacity:0.5
    }} 
    whileInView={{opacity: 1}} 
    viewport={{
        amount: "some"
    }}
    transition={{
        duration:0.5
    }}
    className="flex  flex-col items-center  w-full  sm:w-lg md:w-screen justify-center relative h-[107vh]">

        <h1 className={`${tangerine.variable} text-7xl scale-120 flex items-center justify-center m-12 font-tangerine`}>
            Hello Everyone!
        </h1>

        <div className="flex flex-col items-center justify-center w-xl">
        <p className=" sm:text-lg w-sm p-10 md:w-auto md:p-0 md:text-xl">
            Im Amrit , a creative devloper based in delhi , Welcome to my corner of internet where I showcase my work , what I am upto , all projects , and so much more Through past 4 years , I am working on myself constantly forging my skills to become better and better 
        </p>
        <p className="sm:text-lg w-sm p-10 md:w-auto md:p-0 md:text-xl"> During this time , I continuously refine my craft by sharpening my eye through the inspiring work of many other creative devs,designers and 3d artsits and working hard on my engineer skills to meet my ever evolving taste in creative web devlopment </p>
        
        <p className="sm:text-lg w-sm p-10 md:w-auto md:p-0 md:text-xl">
            
        When not building , I love to edit montages and other things , I use after effects  
       
        </p>
        
        </div>
         <div className= " absolute flex right-0 top-100 w-[100vw] h-[100vh] max-w-[550px] max-h-[550px] bg-[rgb(26,80,162)] blur-[50vw] 2xl:blur-[10vw] opacity-60 rounded-full"></div>
         <div className= " absolute flex left-290 top-100 w-[100vw] h-[100vh] max-w-[550px] max-h-[550px] bg-[rgb(255,255,255)] blur-[50vw] 2xl:blur-[10vw] opacity-60 rounded-full"></div>
    </motion.div>
    </>
}
export default Introduction