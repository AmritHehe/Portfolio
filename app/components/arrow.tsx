import React from "react";
import * as motion from "motion/react-client"
//import { anticipate, delay } from "motion";
//import { reverse } from "dns";
export function Arrow(){ 
    return <motion.svg 
    initial = {{ 
        rotate : 0 
    }}
    
    animate={{

        rotate: 40,

    }}
    transition={{
        // yoyo : 1 ,
        duration : 1 , 
        delay : 7, 
        repeat : Infinity,
        repeatType : "reverse" , 
        repeatDelay : 1.5,
        ease:"anticipate"
        // repeatDelay : 10,
        // ease:anticipate
    }}
    
   xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 m-1 inline z-20">
    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
  </motion.svg>
  
}