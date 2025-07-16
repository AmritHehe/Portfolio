import React from "react";
import WorkComp from "../WorkComp";
import { tangerine } from "./fonts";

export function Projects(){ 
    return<>
        <div className={`${tangerine.variable} relative w-full  text-xl flex flex-col items-center justify-center`}>
            <h1 className="text-7xl font-tangerine"> Recent works </h1>
            <div className="relative flex w-screen md:w-6xl  justify-center lg:justify-end m-3">
                <WorkComp text="Excelidraw" disc = "Online Whiteboard , Made simple" imageSrc="/D7.png" link = "https://chat-app-excelidraw-frontend.vercel.app/"/> 
                {/* <div className= " absolute  top-80 left-110 w-[60vw] h-[60vw] max-w-[200px] max-h-[200px] bg-[rgb(72,154,255)] blur-[20vw] 2xl:blur-[10vw] opacity-60 rounded-full"></div> */}
            </div>
            
            <div className="flex w-screen md:w-6xl  justify-center lg:justify-start m-3">
               <WorkComp text="Poloroids" disc="create poloroids from local images!" imageSrc="/POLOROIDS.png" link ="https://poloroids-v1.vercel.app/"/>
            </div>
            <div className= " absolute flex right-350 top-70 w-[100vw] h-[100vh] max-w-[420px] max-h-[420px] bg-[rgb(26,40,162)] blur-[50vw] 2xl:blur-[10vw] opacity-60 rounded-full"></div>
            <div className= " absolute flex right-350 top-70 w-[100vw] h-[100vh] max-w-[420px] max-h-[420px] bg-[rgb(255,255,255)] blur-[50vw] 2xl:blur-[10vw] opacity-60 rounded-full"></div>
            <div className="flex w-screen md:w-6xl  justify-center lg:justify-end m-3">
               <WorkComp text="Skaters Republic" disc="Game Selling Website!" imageSrc="/skates.png" link = "https://amrithehe.github.io/SkatersRepublic/" />
            </div>
            <div className="flex w-screen md:w-6xl  justify-center lg:justify-start m-3">
               <WorkComp text="Portfolio" disc="haha! you are on it already" imageSrc="/D5.png" link =  "https://portfolio-amritt.vercel.app/" />
            </div>
             <div className= " absolute flex left-350 top-220 w-[100vw] h-[100vh] max-w-[420px] max-h-[420px] bg-[rgb(26,40,162)] blur-[50vw] 2xl:blur-[10vw] opacity-60 rounded-full"></div>
            <div className= " absolute flex left-350 top-220 w-[100vw] h-[100vh] max-w-[420px] max-h-[420px] bg-[rgb(255,255,255)] blur-[50vw] 2xl:blur-[10vw] opacity-60 rounded-full"></div>
           
            
        </div>
    </> 
}
export default Projects