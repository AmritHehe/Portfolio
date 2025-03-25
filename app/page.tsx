import Image from "next/image";
import Hero from "./components/hero";
import Navbar from "./components/Navbar";
import ImageDiv from "./components/ImageDiv";

export default function Home() {
  return (
      <>
      <div className="overflow-x-hidden">
        <main className="relative bg-gray-950 flex flex-col items-center justify-start   mx-auto h-screen  w-full sm:px:10 px-5">
          <Navbar/>

            <div className=" max-w-7xl flex item-center justify-center m-25 w-full">
              <Hero/>


            </div>
        </main>
        <div className="h-500 w-screen   flex  justify-center items-center  bg-gray-500 ">
          <div className="grid grid-cols-1 mm-10  sm:grid-cols-2 ">
            <ImageDiv imageSrc="https://static.vecteezy.com/system/resources/thumbnails/022/739/768/small_2x/3d-render-sunrise-view-from-space-on-planet-earth-generat-ai-free-photo.jpg" text="Hello I am amrit the og" textV="center" textH="center" colspan="col-span-2" />

            <ImageDiv imageSrc="https://static.vecteezy.com/system/resources/thumbnails/002/225/676/small_2x/cute-chubby-teddy-bear-and-polar-bear-friends-greeting-cartoon-doodle-free-vector.jpg" text="Hello British Vogue  I am Sneha" textV="end" textH="end" />
            

            <ImageDiv imageSrc="https://static.vecteezy.com/system/resources/thumbnails/002/225/676/small_2x/cute-chubby-teddy-bear-and-polar-bear-friends-greeting-cartoon-doodle-free-vector.jpg" text="Hello British Vogue  I am Sneha" textV="end" textH="end" />

            <ImageDiv imageSrc="https://static.vecteezy.com/system/resources/thumbnails/002/225/676/small_2x/cute-chubby-teddy-bear-and-polar-bear-friends-greeting-cartoon-doodle-free-vector.jpg" text="Hello British Vogue  I am Sneha" textV="end" textH="end" />
            
            
          </div>
            
         </div>
        
        </div> 
         
      </>
  );
}
