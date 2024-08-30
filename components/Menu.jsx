import Separator from "./Separator";

import { MenuItem } from "./MenuItem";

    const menuItems = [
    {
        imgSrc: "/assets/menu/1.png",
        name: "Margherita Delight",
        description: "Classic pizza with fresh mozzarella and basil.",
        price: 12.5,
    },
    {
        imgSrc: "/assets/menu/2.png",
        name: "Pepperoni Feast",
        description: "Pepperoni with melted mozzarella.",
        price: 13.2,
    },
    {
        imgSrc: "/assets/menu/3.png",
        name: "Veggie Supreme",
        description: "Loaded with bell peppers, onions, and olives.",
        price: 10.4,
    },
    {
        imgSrc: "/assets/menu/4.png",
        name: "Classic Crispy Fries",
        description: "Golden, crispy fries seasoned to perfection.",
        price: 4.3,
    },
    {
        imgSrc: "/assets/menu/5.png",
        name: "Cheesy Loaded Fries",
        description: "Fries topped with melted cheese and bacon.",
        price: 4.7,
    },
    {
        imgSrc: "/assets/menu/6.png",
        name: "Spicy Garlic Fries",
        description: "Crispy fries with garlic and spicy seasoning.",
        price: 3.3,
    },
    {
        imgSrc: "/assets/menu/7.png",
        name: "Spaghetti Bolognese",
        description: "Hearty meat sauce with spaghettie",
        price: 13.73,
    },
    {
        imgSrc: "/assets/menu/8.png",
        name: "Spaghetti Carbonara",
        description: "Creamy pasta with pancetta and Parmesan.",
        price: 10.5,
    },
    {
        imgSrc: "/assets/menu/9.png",
        name: "Classic Garlic Bread",
        description: "Crispy bread with garlic and herbs.",
        price: 3.3,
    },
    {
        imgSrc: "/assets/menu/10.png",
        name: "Cheesy Garlic Bread",
        description: "Garlic bread topped with melted mozzarella.",
        price: 4.23,
    },
];

const Menu = () => {
    return (
        <section className="pt-12 pb-16 xl:pt-16 xl:pb-36" id="menu">
        <div className="container mx-auto">
            <div className="flex flex-col gap-4 mb-12 xl:mb-24">
            <h2 className="h2 text-center">Our Menu</h2>
            <div className="mb-4">
                <Separator bg="accent"/>
            </div>
            <p className="text-center max-w-[620px] mx-auto">
            Discover a delightful selection of our signature dishes. Each item is crafted with care and passion to ensure the best dining experience. From our mouthwatering pizzas and hearty pastas to crispy fries and savory garlic bread, there’s something to satisfy every craving. Enjoy a taste of excellence in every bite!
            </p>
            </div>
            {/* menu btn */}
            <div className="flex flex-col items-center gap-12 xl:gap-24">
            {/* menu */}
                <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-y-8 gap-x-16 place-content-center">
                    {menuItems.map((item, index) => {
                        const {name,description, price, imgSrc} = item;
                        return (<MenuItem name={name} description={description} price={price} imgSrc={imgSrc} key={index}/>
                        );
                    })}
                </div>
                <button className="btn">View full menu</button>
            </div>
        </div>
        </section>
    );
    };

    export default Menu;
