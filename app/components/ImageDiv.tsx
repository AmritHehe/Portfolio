import React from "react";

type things = { 
    imageSrc : string;
    text: string;
    textV : string;
    textH :string;
    colspan? :string

}
export function ImageDiv(things : things){ 

    return <div className={ `${things.colspan} rounded-xl bg-red-300  p-0 m-3 relative flex items-${things.textV} justify-${things.textH }  overflow-hidden `}>
             <h3 className="drop-shadow-lg text-red-700 font-bold text-xl m-3 z-10 absolute text">{things.text}</h3>
            <img className=" object-cover  h-full w-auto absolute;" src={things.imageSrc} alt="" />               
        </div>
    
}
export default ImageDiv