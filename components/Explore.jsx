    import Image from "next/image";

    const Explore = () => {
    return (
        <section className="py-12 xl:py-0 xl:h-[90vh] xl:w-screen" id="explore">
        <div className="container mx-auto xl:w-full xl:h-full flex xl:justify-center xl:items-center">
            <div className=" w-full flex flex-col lg:flex-row gap-12 xl:gap-20">
            <div className="flex-1   flex flex-col justify-around items-end text-center xl:text-left gap-12 xl:gap-0 max-w-[400px] mx-auto xl:max-w-none xl:mx-0">
                {/* items */}
                <div className="relative flex items-start">
                <div className="xl:max-w-[420px] xl:text-right xl:flex xl:flex-col xl:items-end">
                    <div className="mb-6 flex justify-center items-center">
                    <Image src="/assets/explore/icons/3.svg" width={100} height={100} alt="" />
                    </div>
                    <h3 className="text-3xl xl:text-4xl font-primary font-bold mb-4">Crispy Golden Fries</h3>
                    <p className="max-w-[400px]">
                    Delight in the crispy, golden perfection of our seasoned fries—an irresistible side that pairs perfectly with your favorite pizza.
                    </p>
                </div>
                </div>
                {/* items 2*/}
                <div className="relative flex items-start">
                <div className="xl:max-w-[420px] xl:text-right xl:flex xl:flex-col xl:items-end">
                    <div className="mb-6 flex justify-center items-center">
                    <Image src="/assets/explore/icons/2.svg" width={100} height={100} alt="" />
                    </div>
                    <h3 className="text-3xl xl:text-4xl font-primary font-bold mb-4">Signature Pizza Creations</h3>
                    <p className="max-w-[400px]">
                    Experience the ultimate crafted with the freshest ingredients and perfectly baked to a golden, cheesy perfection. A slice of heaven in every bite.
                    </p>
                </div>
                </div>
            </div>
            {/* image */}
            <div className="hidden xl:flex justify-center">
                <div className="relative w-[322px] h-[580px]">
                <Image 
                src="/assets/explore/piz.png" alt="" fill className="object-cover" quality={100} priority data-scroll data-scroll-speed="0.1"/>
                </div>
            </div>
            <div className="flex-1  flex flex-col justify-around  text-center xl:text-left gap-12 xl:gap-0 max-w-[400px] mx-auto xl:max-w-none xl:mx-0">
                {/* items */}
                <div className="relative flex items-start">
                <div className="xl:max-w-[420px] xl:text-left xl:flex xl:flex-col xl:items-start">
                    <div className="mb-6 flex justify-center items-center">
                    <Image src="/assets/explore/icons/4.svg" width={100} height={100} alt="" />
                    </div>
                    <h3 className="text-3xl xl:text-4xl font-primary font-bold mb-4">Savory Spaghetti Bowls</h3>
                    <p className="max-w-[400px]">
                    Savor the rich, hearty flavors of our spaghetti, cooked to perfection and topped with a savory sauce. A comforting classic that's perfect for any pizza night.
                    </p>
                </div>
                </div>
                {/* items */}
                <div className="relative flex items-start">
                <div className="xl:max-w-[420px] xl:text-left xl:flex xl:flex-col xl:items-start">
                    <div className="mb-6 flex justify-center items-center">
                    <Image src="/assets/explore/icons/5.svg" width={100} height={100} alt="" />
                    </div>
                    <h3 className="text-3xl xl:text-4xl font-primary font-bold mb-4">Garlic Bread Bliss</h3>
                    <p className="max-w-[400px]">
                    Enjoy the warm, buttery goodness of our garlic bread, infused with rich garlic flavor and baked to a golden crisp. The perfect start to your pizza feast.
                    </p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    );
    };

    export default Explore;
