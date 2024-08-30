"use client";
import Separator from "./Separator";
import Badge from "./Badge";

const Home = () => {
  return (
    <section className="h-[80vh] xl:h-screen relative text-white">
      {/* overlay */}
      <div className="bg-hero_overlay absolute w-full h-full z-10 bg-black/[0.40]"></div>
      {/* video */}
      <video 
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      > <source src="/assets/hero/video1.mp4" type="video/mp4"/>
      Your browser does not support the video tag.
      </video>
      <div className="container mx-auto h-full flex flex-col xl:flex-col items-center z-30 relative">
        {/* text */}
        <div data-scroll 
        data-scroll-speed="0.4" 
        className="flex-1 flex flex-col text-center justify-center items-center xl:pb-12 gap-10 h-full">
          {/* badge */}
          <div className="flex flex-col items-center">
          <Badge containerStyles="hidden xl:flex xl:w-[250px] xl:h-[250px]"/>
          <h1 className="h1 text-white"> Share
            <span className="text-red-600"> Together</span> 
          </h1>
          </div>
          {/* Separator */}
          <Separator />
          <p className="lead font-light max-w-[300px] md:max-w-[430px] xl:max-w;[560px] mb-4">Share the joy of exceptional pizza in our cozy space, where every slice brings us closer together.</p>
      <button className="btn"> Our menu</button>
        </div>
      </div>

    </section>
  )

}


export default Home
