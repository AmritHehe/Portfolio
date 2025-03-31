import React from "react";
import * as motion from "motion/react-client"
//import { anticipate } from "motion";

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
    className="flex flex-col item-center h-full w-full w-sm sm:w-lg md:w-xl justify-center relative">
        <p className="text-xl">
            Hello ! Im Amrit , a creative devloper based in delhi , Welcome to my corner of internet where I showcase my work , what I am upto , all projects , and so much more Through past 4 years , I am working on myself constantly forging my skills to become better and better 
            

        </p>
        <p className="text-xl mt-5"> During this time , I continuously refine my craft by sharpening my eye through the inspiring work of many other creative devs,designers and 3d artsits and working hard on my engineer skills to meet my ever evolving taste in creative web devlopment </p>
        
        <p className="text-xl mt-5">
            
        When not building , I love to edit montages and other things , I use after effects  
        <div className= " absolute bottom-0 right-0 w-[60vw] h-[60vw] max-w-[400px] max-h-[400px] bg-[rgb(72,154,255)] blur-[20vw] 2xl:blur-[10vw] opacity-60 rounded-full"></div>
        </p>
    </motion.div>
    </>
}
export default Introduction