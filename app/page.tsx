import Image from "next/image";
import Hero from "./components/hero";
import Navbar from "./components/Navbar";
import ImageDiv from "./components/ImageDiv";

export default function Home() {
  return (
      <>
        <main className="relative bg-gray-950 flex flex-col items-center justify-start   overflow-x-hidden mx-auto h-screen  w-full sm:px:10 px-5">
          <Navbar/>

            <div className=" max-w-7xl flex item-center justify-center m-25 w-full">
              <Hero/>


            </div>
            <div>
            <ImageDiv/>
            

            </div>
        </main>
      </>
  );
}
