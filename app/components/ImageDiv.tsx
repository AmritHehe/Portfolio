import React from "react";
import Image from "next/image";
type things = { 
    imageSrc : string;
    text: string;
    textV : string;
    textH :string;
    colspan? :string

}
export function ImageDiv(things : things){ 

    return <div className={ `${things.colspan || " "} object-cover rounded-xl bg-red-300 h-full w-full  p-0  relative   overflow-hidden  `}>
             
            {/* <img className=" w-full h-full object-cover inset-0  absolute;" src={things.imageSrc} alt="" />          */}
            <Image 
                // className=" object-cover inset-0 absolute" 
                 src={things.imageSrc} 
                 alt="" 
                 fill
                 style={{objectFit:"cover" , position:"absolute" , inset:0 ,}}
                priority
             />
            <h3 className={`drop-shadow-lg w-full p-4 h-full inset-0 text-slate-400 flex items-${things.textV} justify-${things.textH} font-bold text-xl m-3 z-10 absolute text`}>{things.text}</h3>      
        </div>
    
}
export default ImageDiv