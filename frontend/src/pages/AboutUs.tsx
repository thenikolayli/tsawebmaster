import React, { useState } from 'react';
import Topbar from '../components/Topbar.tsx';

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
        "https://d303frzni7t4jb.cloudfront.net/2024_11_12_7d974d7f-1a80-4c77-99ec-76ff2cc57a37?Expires=1731563371&Signature=akbVcxNDh59Sl0Zk~48n9YkWQ7g2TINiIb~JQ8BbTqxCxajvZcT-g7eAAeWFBJa6peqRDEJ8xwS6PSQYdGfuFC5iSKyIW5tqe137J2JpzAJX6kINKoqRt5wacXrtF49WHbpyeuVPoC-d1FmTzx5uwNhuAhW7dLvDlt~qIGdLN9n6lefc3opgWd3lHefElHJzayQFnKMRcuk5GYXr~7DPr6Geqqf~8Q7lF0O~g2vqLtgLf9o7nMCqO8uqui0Z~UdeX5gfpZJpq35brm22zPKY0WAIgZuOOEahAePeEWn~KDFClxU8qJVLyM9pTTNBkGZtdm5YIzprDGKig0WGBHzj2w__&Key-Pair-Id=KTUQ5O0UDZ92B",
        "https://d303frzni7t4jb.cloudfront.net/2024_11_12_0eff8353-a8ec-4b8f-81e4-9744b7534202?Expires=1731563393&Signature=PK8rfNARt4ERwNbaoOzsmrVc8JzA830YaXcqRaUpNtVZRg5mNdRjNmVr8Hr8koXVCbRBCw-lh6zQF6ciuH37gUZhIEyIjiX7h3HxDR38TAt-GSEIQxryxAwjkNM5IbZY7HxaMEvobK6kZ2iJlhLGDgZes-u~Vrv1x4NlycqsSrl0cZ6tKy8j1H3RE8zOCLdCgLmvEbWgjF9vFDuDZZ4tei1tq3Tpy6oZqe~9UNgNvzithwEgkjZymV6M6O6bL-C0X2hKWjlkIrPwmBG1mJA2xCPEnIsllDxK7CUlIg7cKVi7uIAwODpgrRpi869zuujohfW~V5cqedngUQY3lakWZw__&Key-Pair-Id=KTUQ5O0UDZ92B",
        "https://d303frzni7t4jb.cloudfront.net/2024_11_12_6a48f3cf-97c9-4f59-bbf4-a6752fa7fed1?Expires=1731563266&Signature=oxLXe4TonWNIvc9LjK9JiNw6IHa1yog4k5Yq9juG~l8MU3Jmf5RrTH6hl9RoaLRP3s3IO5K53Wh82CbqPwVSwLriESvSEyTrrRLGZ2tSwQUT8GPvHpxp7islMev5EkolAFDJlDfjpyco~S7uXSqIIiKs6JFRlefLy0e2TfjtRDBNoW5ukrYC30~qu909x69B5WfV14dSFD7JOmAA27V3IfuLntUkioe-00p5pQbyH5z4gpLbbtb5TTPF9Rku85fA-CRCOsuYMNkguRAe-p2Npp4kj3jEFtE-UhviXm5m0SJxXnsWrcT-X6H~EPJPhMKf8f0J3nGFjWxB~-jnvls0rQ__&Key-Pair-Id=KTUQ5O0UDZ92B",
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

export default AboutUs
