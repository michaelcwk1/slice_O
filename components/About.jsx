"use client";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import Badge from "./Badge";
import Separator from "./Separator";


const data =[ 
    {
        imgSrc: "/assets/about/4.png",
        title: "Our Journey",
        description: "Established in 2000, Slice O began as a humble pizzeria with a passion for authentic flavors. Today, we've grown into a beloved brand known for our dedication to quality and innovation. Join us as we continue our journey, crafting unforgettable pizza experiences one slice at a time.",
    },
    {
        imgSrc: "/assets/about/3.png",
        title: "Our Promise",
        description: "At Slice O, we promise to deliver the freshest, most delicious pizza with a commitment to excellence. We source only the best ingredients, ensuring every bite is a celebration of flavor. Our dedication to quality, sustainability, and community is at the heart of everything we do.",
    },
    {
        imgSrc: "/assets/about/2.png",
        title: "Our Team",
        description: "At Slice O, our team is the heart of our pizzeria. Our talented chefs and passionate staff work tirelessly to create pizzas that delight and inspire. Meet the people who infuse every slice with creativity and care, making each meal at Slice O a truly special experience.",
    },
];


const About = () => {
    const scrollableSectionRef = useRef(null);
    const scrollTriggerRef =useRef(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const animation = gsap.fromTo(
            scrollableSectionRef.current,
            {translateX: 0},
            {
                translateX: "-200vw", ease: "none" , duration: 1, scrollTrigger:{
                trigger: scrollTriggerRef.current,
                start: "top top",
                end: "1800vw top",
                scrub: 0.6,
                pin: true, 
                },
            }
        )
        return () => {
            animation.kill();
        }
    }, []);




  return (
    <section className="overflow-hidden bg-primary " id="about">
        <div ref={scrollTriggerRef}>
            <div ref={scrollableSectionRef} className="h-screen w-[300vw] flex relative">
                {data.map((item, index) => {
                    return (
                    <div key={index} className="w-screen h-screen flex flex-col justify-center items-center relative">
                        <div className="container mx-auto">
                            <div className="flex gap-[30px] relative">
                            {/* text */}
                            <div className="flex-1 flex flex-col text-white justify-center items-center"> 
                                <Badge containerStyles="w-[180px] h-[180px]" />
                                <div className="max-w-[560px] text-center">
                                    {/* title */}
                                    <h2 className="h2 text-white mb-4">
                                        <span className="mr-4">{item.title.split(" ")[0]}</span>
                                        <span className="text-red-600">{item.title.split(" ")[1]}</span>
                                    </h2>
                                    {/* seperator */}
                                    <div className="mb-8">
                                    <Separator />

                                    </div>
                                    {/* desk */}
                                    <p className="leading-relaxed mb-16 px-8 xl:px-0">
                                        {item.description}
                                    </p>
                                    {/* btn */}
                                    <button className="btn">See More</button>

                                </div>
                            </div>
                            {/* image */}    
                            <div className="hidden xl:flex flex-1 w-full h-[75vh] relative">
                                <Image 
                                src={item.imgSrc}
                                fill
                                quality={100}
                                priority
                                alt=""
                                />

                            </div>
                                
                            </div>
                        </div>
                    </div>
                    );
                })}
            </div>
        </div>
    </section>
  );
};

export default About;
