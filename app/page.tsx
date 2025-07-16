//import Image from "next/image";
import Hero from "./components/hero";
// import Navbar from "./components/Navbar";
//import ImageDiv from "./components/ImageDiv";
//import BentoGrid from "./components/BentoGrid";
import Introduction from "./components/Introduction";
import Projects from "./components/projectspage";
import { Connect } from "./components/connect";

export default function Home() {
  return (
      <>
      <div className="overflow-x-hidden">
        <main className="relative bg-black flex flex-col items-center justify-start   mx-auto h-screen  w-full sm:px:10 px-5">
          {/* <Navbar/> */}

            <div id="hero" className=" max-w-7xl flex item-center justify-center m-25 w-full">
              <Hero/>


            </div>
        </main>
        {/* <div className="h-100dvh w-screen flex bg-black  justify-center items-center  ">
          <BentoGrid/>
            
         </div> */}
        <section id="about">
          <div  className="h-150vh w-screen flex items-center justify-center bg-black">
              <Introduction/>
          </div>
        </section>
        <div className="h-[320vh] w-screen  flex items-center justify-center bg-black ">
            <Projects/>
        </div>
        <div className="bg-black ">
            <Connect/>
        </div>
        {/* <div className="h-100dvh w-screen flex bg-black  justify-center items-center  ">
          <BentoGrid/>
            
         </div> */}
        </div> 
         
      </>
  );
}
