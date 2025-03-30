
import React from "react";  
//import { useState } from "react";
import { Arrow } from "./arrow";
import { Spotlight } from "./ui/spotlight";
//import { Boxes} from "./ui/Background-boxes";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import * as motion from "motion/react-client"
//import { anticipate, easeIn, hover } from "motion";
// import Image from "next/image";

import { ysf,cormorant,tangerine } from "./fonts";



export function Hero( ){ 
    

    // const [hovered , isHovered] = useState(false)
    return <>
    {/* <BoxesCore /> */}
    {/* <Boxes/> */}
    
    
    <div  className="absolute inset-0 w-full "  >
    {/* <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[rgb(255,180,220)] blur-[160px] opacity-60 rounded-full"></div>
 
    <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[rgb(130,100,255)] blur-[160px] opacity-60 rounded-full"></div> */}
     <div className="absolute bottom-0 left-0 w-[60vw] h-[60vw] max-w-[500px] max-h-[500px] bg-[rgb(255,180,220)] blur-[20vw] 2xl:blur-[10vw] opacity-80 rounded-full"></div>
      {/* <svg>
        <filter id="grainy">
          <feTurbulence 
              type="turbulance"
              baseFrequency="0.65"
            />

        </filter>
      </svg> */}
      

      <div className="absolute top-0 right-0 w-[60vw] h-[60vw] max-w-[500px] max-h-[500px] bg-[rgb(130,100,255)] blur-[20vw] 2xl:blur-[10vw]   opacity-80 rounded-full"></div>
      
      {/* <Image 
         className="object-cover absolute inset-0 blur-sm"
         src= "/D5.png"
         alt="" 
         fill
         style={{objectFit:"cover" , position:"absolute" , inset:0 ,opacity : 0.5
         }}
        // priority
      /> */}
    </div>
    <div className={`${cormorant.variable} flex flex-col items-center  sm:w-5/6 z-20`}>
      <Spotlight className="top-0  md:top-40 h-screen " fill='black'/>
      {/* <Spotlight className="scale-x-[-1] top-0  md:top-40 h-screen" />
       */}
        {/* <p className="tracking-widest font-normal">SEO-optimized? Check. Responsive? Double check. Hooked? You bet!</p> */}
        {/* <h1 className="text-5xl  my-24 font-cormorant sm:text-6xl md:text-7xl  text-center m-8  inline">
        Serving up websites that feels like <p className="inline text-purple-300 ">  home</p>
        </h1> */
        }
        <div  className="w-full flex  h-full justify-center scale-150 drop-shadow-[0px_0px_3px_rgba(16,39,108,0.8)] sm:scale-200 md:scale-250 lg:scale-400 my-48  items-center size-5">
        <h1 className=  {`${tangerine.variable} text-8xl inline font-tangerine`}>P  
          <h1 className={`${cormorant.variable} text-6xl font-cormorant inline-block`}>or</h1>
          <h1 className={`${tangerine.variable} text-7xl mr-1 font-tangerline inline-block`}>t</h1>
          <h1 className={`${cormorant.variable} text-6xl font-cormorant inline-block`}>foli</h1>
          <h1 className={`${ysf.variable} text-5xl font-young font-thin inline-block`}>o</h1>
        </h1>
        <br />
        </div>
        {/* <div>Amrit </div> */}
        {/* <h2 >
            Hi! I am  Amrit , A Mern Stack Dev based in Delhi
        </h2> */}
        <TextGenerateEffect className={`${cormorant.variable}  font-cormorant italic`} words ="Hi! I am  Amrit , A Mern Stack Dev based in Delhi" />
        <motion.div drag dragConstraints={{ 
            left : 0 , 
            right : 0, 
            top : 0 , 
            bottom : 0
        }}  whileHover = {{scale : 1.2}} className=" bg-gradient-to-r from-gray-800 to-cyan-700 p-2 rounded-2xl border-2 border-zinc-700 px-6 py-4 mt-10 ab"> <p className="inline-block">See My Work </p> <motion.div  whileHover={{rotate : 120}}  drag dragConstraints={{ 
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