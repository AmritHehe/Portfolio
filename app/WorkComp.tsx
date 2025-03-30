import React from "react";
import Image from "next/image";
import { cormorant } from "./components/fonts";


type props = { 
    imageSrc : string;
    text: string;
    disc?: string;
   

}
export function WorkComp(props :props){ 
    return <>
        <div className={`${cormorant.variable} min-h-[40vh]  w-sm  md:w-2xl  m-6 rounded-xl bg-gray-900 relative overflow-hidden`}>
            
        <Image 
            className=" opacity-70 blur-sm " 
            src={props.imageSrc}
            alt="" 
            fill
            style={{objectFit:"cover" , position:"absolute" , inset:0}}
            priority
        />
        <div className="flex h-full w-full items-end justify-start">
            <p className="z-2 absolute ml-5 m-10 text-5xl  font-cormorant italic">{props.text} </p>
            <p className="z-2 absolute ml-5 m-2 ">{props.disc}</p>
        </div>
        </div>
    </>
}
export default WorkComp
