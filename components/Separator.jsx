import Image from 'next/image'
import React from 'react'


    const Separator = ({ bg = "white" }) => {
    const imgSrc =
    bg === "accent"
    ? "/assets/separator-accent.svg"
    : "/assets/separator-white.svg";
    
    
        return (
        <div className='relative w-[228px] h-[46px] mx-auto'>
            <Image src={imgSrc} fill alt='' />
        
        </div>
    )
    }

    export default Separator
