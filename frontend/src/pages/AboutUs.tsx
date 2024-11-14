import React, {useEffect} from 'react';
import Topbar from '../components/Topbar.tsx';

const AboutUs = () => {
    useEffect(() => {
        document.title = "About Us"
    })

    const sections: {title: string, text: string, imageSource: string, key: number}[] = [
        {
            title: "Our Philosophy",
            text: "We believe in nourishing bodies and souls through the power of plant-based cuisine. Our culinary journey celebrates the diversity of flavors, textures, and colors found in nature, offering a compassionate and delicious dining experience.",
            imageSource: "./src/assets/gifs/rice-salad.gif",
            key: 0
        },
        {
            title: "Farm to Table",
            text: "Committed to supporting local farmers and sustainable practices, we source the freshest, seasonal ingredients from our community. Our dishes highlight the natural beauty of plant-based foods, showcasing the vibrant flavors and nutritional benefits of each ingredient.",
            imageSource: "./src/assets/gifs/grapes-fruits.gif",
            key: 1
        },
        {
            title: "Sustainability",
            text: "We strive to minimize our environmental impact by reducing waste, conserving energy, and promoting ethical sourcing. By choosing sustainable practices, we aim to create a positive impact on the planet and inspire others to embrace a more conscious lifestyle.",
            imageSource: "./src/assets/gifs/environmental-farm.gif",
            key: 2
        },
    ];

    return (
        <div className="min-h-screen bg-sbeige">
            <Topbar />
            <div className="flex flex-col items-center">
                {sections.map((section) => (
                    <div className="relative aspect-video w-full h-auto overflow-hidden">
                        <img className="absolute z-0 w-full" src={section.imageSource} alt={section.title}/>
                        <h1 className="absolute z-20 top-[40%] inset-x-0 mx-auto w-fit font-playfair text-2xl text-wolive p-4 bg-black/50 rounded-full">{section.title}</h1>
                        <h1 className="absolute z-10 top-[40%] inset-x-0 mx-auto w-1/2 font-playfair text-center text-xl text-wolive p-4 bg-black/50 rounded-2xl">{section.text}</h1>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AboutUs
