import React, { useState } from 'react';
import Topbar from '../components/Topbar.tsx';
import './AboutUs.css';

interface Section {
    title: string;
    text: string;
}

const AboutUs: React.FC = () => {
    const [expandedSection, setExpandedSection] = useState<number | null>(null);

    const toggleSection = (sectionIndex: number, event: React.MouseEvent) => {
        event.preventDefault();
        setExpandedSection(sectionIndex === expandedSection ? null : sectionIndex);
    };

    const images: string[] = [
        "https://d303frzni7t4jb.cloudfront.net/2024_11_11_4fafc591-4891-4e53-948a-20ac41b23acf?Expires=1731539040&Signature=TeAFuFWX74PMOa6DfsOXNPkp6EsNx6kQuwDjUH3Qo79SoEpJ7kWh6T~nb146lS267wg7jRh8NhraCuliDyLa58n~pk04enrwx9IASV7zeoSeRrS17YqsbabWQofk66CTqgRTjeu7B7J1czPzU-wqP9UVgn7YamMlWIvl0XAvjigtEZ8AK~JctosWHqLdwqzw-Fezme~kiPboa5E31HvqWiRHNtMGtScfYzfdSiHToTtLKZ0Jnh-dFoSmB8rQJzo4iW-o1hhNF-yX5vIyd4JcSzj2AyrDJjGMFzpI7ydmLK9gaYIiP8Igy6axbjR53JxCmRKFHpT5PeJFtO5oW6NKaA__&Key-Pair-Id=KTUQ5O0UDZ92B",
        "https://d303frzni7t4jb.cloudfront.net/2024_11_12_9352d506-4ec9-4b10-b028-5b74f1bf55e9?Expires=1731548696&Signature=Odkz1oS4SWmlfxAeoNjCPyqDJENzTz9Ih9g0TSeZ5UyEPT4Mt2k~os9jgtL8SWGoMZTpEDGGWWn7LIlGSrd85iCdnZ4pddHTFMc3JPEZJTYINXNo-7HcFDrNng7PM1Gjy92kjiVzOlgeT6HsADxKa1mK~b5oLTM6xxkAaC1OZBDZQHU2GXJfX8BDweMapSDYZZUjgypY8HV8hnqZceUbXrMUWZvPfEgCGUuTVpDQ~N9ktoAemn196Vb9RvsFaGl9WYTnaR0WVLlLPPYfcypMe2JFp5DW3ZbKPa7Y8VmqF5xBh6whz3m8m6hjibPpTO~x1UhT-fUxAoM-wRQujAc0qQ__&Key-Pair-Id=KTUQ5O0UDZ92B",
        "https://d303frzni7t4jb.cloudfront.net/2024_11_12_38d3159a-8d7c-402c-b4b7-71886cb38d19?Expires=1731548832&Signature=m3AP3gOX8N7Um0z7oFHwSc68XV8w3k9ec~v9jSz09jLLyBwd64VNBTCWb2Ar6KnUhY4JvJm5lX6LjkGrw6wcU1~eKgqrzZCmiZB5BXmlc8CN0PaYnOtSxTDZ2gVtLctOk~smKlHwjQhNzbD-4tQvD6XyMpyNzYEdo70OCKRGdfMhMJ4IvuNTRyToaqNk8LeFhOAh2~rllzR5sYMcyDcMwWSzPqOYOBOgVzSi4TqcC~HFZvdJ4iilHBS-iJrwayx3pl67Na42eNPNi991wWmj46nO-6zYDRCv4p5aRUux1A~AbdQ87O72pfNZA1VPpOgFdQ64MI4YZ0T0G-PgQsQaoA__&Key-Pair-Id=KTUQ5O0UDZ92B",
    ];

    const sections: Section[] = [
        {
            title: "Our Philosophy",
            text: "We believe in nourishing bodies and souls through the power of plant-based cuisine. Our culinary journey celebrates the diversity of flavors, textures, and colors found in nature, offering a compassionate and delicious dining experience.",
        },
        {
            title: "Farm to Table",
            text: "Committed to supporting local farmers and sustainable practices, we source the freshest, seasonal ingredients from our community. Our dishes highlight the natural beauty of plant-based foods, showcasing the vibrant flavors and nutritional benefits of each ingredient.",
        },
        {
            title: "Sustainability",
            text: "We strive to minimize our environmental impact by reducing waste, conserving energy, and promoting ethical sourcing. By choosing sustainable practices, we aim to create a positive impact on the planet and inspire others to embrace a more conscious lifestyle.",
        },
    ];

    return (
        <div className="min-h-screen bg-sbeige">
            <Topbar />
            <div className="flex flex-col items-center">
                {images.map((src, index) => (
                    <div key={index} className="relative w-full">
                        <img className="w-full h-auto object-cover" src={src} alt={`Slide ${index + 1}`} />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white bg-black bg-opacity-50 p-4 rounded-full w-64 h-24 z-20">
                            <a
                                href="#"
                                onClick={(event) => toggleSection(index, event)}
                                className="font-lato font-bold text-3xl mb-4 cursor-pointer z-30 relative"
                            >
                                {sections[index].title}
                            </a>
                        </div>
                        <div
                            className={`transition-all duration-500 ease-in-out overflow-hidden w-64 mx-auto ${
                                index === expandedSection ? 'max-h-96' : 'max-h-0'
                            }`}
                            style={{ transition: 'max-height 0.5s ease-out' }}
                        >
                            <p className="text-white mt-4">{sections[index].text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AboutUs;
