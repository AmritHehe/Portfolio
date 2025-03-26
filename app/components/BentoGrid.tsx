import React from "react";
import ImageDiv from "./ImageDiv";

export function BentoGrid(){ 
    return <div className="grid m-12 min-h-screen w-fit   max-w-4xl grid-cols-1  my-24 sm:grid-cols-2 gap-4 p-2  ">
            
    <ImageDiv imageSrc="https://static.vecteezy.com/system/resources/thumbnails/022/739/768/small_2x/3d-render-sunrise-view-from-space-on-planet-earth-generat-ai-free-photo.jpg" text="Hello I am amrit the og" textV="end" textH="end" colspan="row-span-2" />

    <ImageDiv imageSrc="https://static.vecteezy.com/system/resources/thumbnails/002/225/676/small_2x/cute-chubby-teddy-bear-and-polar-bear-friends-greeting-cartoon-doodle-free-vector.jpg" text="Hello British Vogue  I am Sneha" textV="center" textH="center" />
    

    <ImageDiv imageSrc="https://static.vecteezy.com/system/resources/thumbnails/002/225/676/small_2x/cute-chubby-teddy-bear-and-polar-bear-friends-greeting-cartoon-doodle-free-vector.jpg" text="Hello British Vogue  I am Sneha" textV="end" textH="end" />

    <ImageDiv imageSrc="https://static.vecteezy.com/system/resources/thumbnails/002/225/676/small_2x/cute-chubby-teddy-bear-and-polar-bear-friends-greeting-cartoon-doodle-free-vector.jpg" text="Hello British Vogue  I am Sneha" textV="end" textH="end" />
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 grid-rows-2 ">
      <div className="row-span-2 ">
        <ImageDiv imageSrc="https://static.vecteezy.com/system/resources/thumbnails/002/225/676/small_2x/cute-chubby-teddy-bear-and-polar-bear-friends-greeting-cartoon-doodle-free-vector.jpg" text="Hello British Vogue  I am Sneha" textV="end" textH="end" />
      </div>
      <div>
          <ImageDiv imageSrc="https://static.vecteezy.com/system/resources/thumbnails/002/225/676/small_2x/cute-chubby-teddy-bear-and-polar-bear-friends-greeting-cartoon-doodle-free-vector.jpg" text="Hello British Vogue  I am Sneha" textV="end" textH="end" />
      </div>
      <div>
          <ImageDiv imageSrc="https://static.vecteezy.com/system/resources/thumbnails/002/225/676/small_2x/cute-chubby-teddy-bear-and-polar-bear-friends-greeting-cartoon-doodle-free-vector.jpg" text="Hello British Vogue  I am Sneha" textV="end" textH="end" />
      </div>
      <div>
          <ImageDiv imageSrc="https://static.vecteezy.com/system/resources/thumbnails/002/225/676/small_2x/cute-chubby-teddy-bear-and-polar-bear-friends-greeting-cartoon-doodle-free-vector.jpg" text="Hello British Vogue  I am Sneha" textV="end" textH="end" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <div >
          <ImageDiv imageSrc="https://static.vecteezy.com/system/resources/thumbnails/002/225/676/small_2x/cute-chubby-teddy-bear-and-polar-bear-friends-greeting-cartoon-doodle-free-vector.jpg" text="Hello British Vogue  I am Sneha" textV="end" textH="end" />
         </div>
         <div>
          <ImageDiv imageSrc="https://static.vecteezy.com/system/resources/thumbnails/002/225/676/small_2x/cute-chubby-teddy-bear-and-polar-bear-friends-greeting-cartoon-doodle-free-vector.jpg" text="Hello British Vogue  I am Sneha" textV="end" textH="end" />
         </div>
      </div>
    </div>
    
    
  </div>
}

export default BentoGrid