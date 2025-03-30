import React from "react";
import WorkComp from "../WorkComp";
import { tangerine } from "./fonts";

export function Projects(){ 
    return<>
        <div className={`${tangerine.variable} h-full w-full text-xl flex flex-col items-center justify-center`}>
            <h1 className="text-7xl font-tangerine"> Recent works </h1>
            <WorkComp text="Poloroids" disc="create poloroids from local images!" imageSrc="/POLOROIDS.png" />
            <WorkComp text="Skaters Republic" disc="Game Selling Website!" imageSrc="/skates.png" />
            <WorkComp text="Portfolio" disc="haha! you are on it already" imageSrc="/D5.png" />
        </div>
    </> 
}
export default Projects