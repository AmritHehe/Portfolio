import React from "react";

export function Navbar(){ 

    return <>
        <div className="border-1 border-zinc-800 flex justify-between rounded-xl p-4 m-6 inner">
            <button className="pl-8">About</button>
            <button className="pl-8">Projects</button>
            <button className="px-8">Testimonials</button>
            <button className="pr-8">Contact</button>
        </div>
    </>
}
export default Navbar