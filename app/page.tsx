//import Image from "next/image";
import Hero from "./components/hero";
import Navbar from "./components/Navbar";
//import ImageDiv from "./components/ImageDiv";
import BentoGrid from "./components/BentoGrid";

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
        <div className="h-100dvh w-screen flex  justify-center items-center  ">
          <BentoGrid/>
            
         </div>
        
        </div> 
         
      </>
  );
}
