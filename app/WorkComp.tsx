"use client"
import React, { useRef } from "react";
import Image from "next/image";
import Link  from "next/link";
import { cormorant } from "./components/fonts";
// import { Url } from "url";


type props = { 
    imageSrc : string;
    text: string;
    disc?: string;
    link : string;

}
export function WorkComp(props :props){ 

    const boundingRef = useRef<DOMRect | null>(null)
    return <>
    <div  className=" flex flex-col [perspective:800px]">
        <div 
        onMouseLeave={()=> {
            // console.log("yes");
            boundingRef.current = null }}
        onMouseEnter={(e)=> {boundingRef.current = e.currentTarget.getBoundingClientRect()
        }}
         onMouseMove={(e)=> {if(!boundingRef.current) return;
               const x = e.clientX - boundingRef.current.left;
               const y = e.clientY - boundingRef.current.top;
               const xPercentage = x/boundingRef.current.width; 
               const yPercentage = y/boundingRef.current.height;
               const xRotation = (xPercentage-0.5)*20; 
               const yRotation = (0.5 - yPercentage)*20; 

               e.currentTarget.style.setProperty("--x-rotation",`${yRotation}deg`);
               e.currentTarget.style.setProperty("--y-rotation" , `${xRotation}deg`)
            }} 
         className={`${cormorant.variable} min-h-[60vh]  w-sm  md:w-2xl  m-6 rounded-xl bg-gray-900 relative overflow-hidden transition-transform ease-out hover:[transform:rotateX(var(--x-rotation))_rotateY(var(--y-rotation))_scale(1.1)]`}>
        <Link href={props.link} target="_blank">  
        <Image 
            className=" opacity-70 blur-[2px] hover:blur-[0px] transition-transform" 
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
        </Link>  
        </div>
    </div>
    </>
}
export default WorkComp
