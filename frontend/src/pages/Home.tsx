import Topbar from "../components/Topbar.tsx";
import { useEffect, useState } from "react";
import Footer from "../components/Footer.tsx";
import { createPortal } from "react-dom";
import Elements from "../components/Elements.tsx";

const Home = () => {
    useEffect(() => {
        document.title = "Home";
    }, []);

    const logo = "./src/assets/images/olivedelights-logo.png";
    const imageSource = "./src/assets/gifs/homescreen.gif";
    const [showFullDescription, setShowFullDescription] = useState(false);
    const [showFullDescription1, setShowFullDescription1] = useState(false);
    const [showFullDescription2, setShowFullDescription2] = useState(false);

    return createPortal(
        <div>
            <Topbar />
            <div className="bg-sbeige min-h-screen relative">
                <div className="absolute w-full max-h-[96%] overflow-hidden aspect-video">
                    <img
                        className="z-0 absolute w-full object-cover"
                        src={imageSource}
                        alt="Yummy food"
                    />
                    <img
                        className="z-10 absolute w-3/5 inset-0 mx-auto top-[25%]"
                        src={logo}
                        alt="Logo"
                    />
                    <Elements />
                </div>
            </div>

            <div className="bg-sbeige h-[3000px]">
                <header className="text-center py-12">
                    <h1 className="text-4xl font-bold text-dark">Crafted to Perfection</h1>
                    <p className="text-xl text-gray-600 mt-4">
                        Savor the finest dishes, crafted with care and passion
                    </p>
                </header>

                <section className="relative z-20 py-16 px-4">
                    <div className="z-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white shadow-lg overflow-hidden card-shape-1">
                            <img
                                src="./src/assets/images/caprese salad.jpg"
                                alt="Caprese Salad"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold">Caprese Salad</h3>
                                <p className="text-gray-600 mt-2">
                                    {showFullDescription
                                        ? "Caprese salad is a fresh and simple Italian dish made with ripe tomatoes, creamy mozzarella cheese, fresh basil leaves, and a drizzle of olive oil. Often seasoned with salt, pepper, and a splash of balsamic vinegar, this light, flavorful salad captures the essence of Italian ingredients. It's a perfect appetizer or side dish, especially during summer when tomatoes are at their peak."
                                        : "Caprese salad is a fresh and simple Italian dish made with ripe tomatoes, mozzarella cheese, fresh basil leaves, and olive oil. It's a light and flavorful dish, perfect for summer..."}
                                </p>
                                <button
                                    className="mt-2 text-blue-500 hover:underline"
                                    onClick={() => setShowFullDescription(!showFullDescription)}
                                >
                                    {showFullDescription ? "Show Less" : "Learn More"}
                                </button>
                            </div>
                        </div>

                        <div className="bg-white shadow-lg overflow-hidden card-shape-2">
                            <img
                                src="./src/assets/images/Pasta-Primavera.jpg"
                                alt="Pasta Primavera"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold">Pasta Primavera</h3>
                                <p className="text-gray-600 mt-2">
                                    {showFullDescription1
                                        ? "Pasta Primavera is a vibrant and fresh Italian dish that combines perfectly cooked pasta with a colorful assortment of sautéed seasonal vegetables. Typically made with ingredients like bell peppers, zucchini, cherry tomatoes, peas, and asparagus, the vegetables are lightly cooked to retain their crispness and natural flavors. The dish is often finished with a simple yet flavorful garlic and olive oil sauce, topped with fresh herbs like basil or parsley, and sprinkled with grated Parmesan cheese."
                                        : "Pasta Primavera is a vibrant and fresh Italian dish that combines perfectly cooked pasta with a colorful assortment of sautéed seasonal vegetables. Typically made with ingredients like..."}
                                </p>
                                <button
                                    className="mt-2 text-blue-500 hover:underline"
                                    onClick={() => setShowFullDescription1(!showFullDescription1)}
                                >
                                    {showFullDescription1 ? "Show Less" : "Learn More"}
                                </button>
                            </div>
                        </div>

                        <div className="bg-white shadow-lg overflow-hidden card-shape-3">
                            <img
                                src="./src/assets/images/Pomodoropasta.png"
                                alt="Pomodoro Pasta"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold">Pomodoro Pasta</h3>
                                <p className="text-gray-600 mt-2">
                                    {showFullDescription2
                                        ? "Pomodoro Pasta is a classic Italian dish featuring al dente pasta tossed in a simple yet flavorful tomato sauce made from ripe tomatoes, garlic, olive oil, and fresh basil. This light and aromatic dish highlights the natural sweetness of tomatoes and is often garnished with a sprinkle of fresh herbs for a delightful and satisfying meal."
                                        : "Pomodoro Pasta is a classic Italian dish featuring al dente pasta tossed in a simple yet flavorful tomato sauce made from ripe tomatoes, garlic, olive oil, and fresh basil. This light..."}
                                </p>
                                <button
                                    className="mt-2 text-blue-500 hover:underline"
                                    onClick={() => setShowFullDescription2(!showFullDescription2)}
                                >
                                    {showFullDescription2 ? "Show Less" : "Learn More"}
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </div>,
        document.getElementById("root")!
    );
};

export default Home;
