import { useState, useEffect } from "react";
import Topbar from "../components/Topbar.tsx";
import Footer from "../components/Footer.tsx";

const Menu = () => {
    useEffect(() => {
        document.title = "Menu";
    }, []);

    const [showFullDescription, setShowFullDescription] = useState(false);

    const logo1 = "./src/assets/images/mstarter.png";
    const imageSource1 = "./src/assets/gifs/menuscreen.gif";

    return (
        <>
            <Topbar />
            <div className="bg-sbeige">
                <div className="relative h-screen">
                    <img
                        className="w-23 inset-2 object-contain absolute mx-auto"
                        style={{ transform: 'translateY(200px)' }}
                        src={logo1}
                        alt="Logo"
                    />
                    <img
                        className="z-0 w-full max-h-[calc(100vh-20px)] object-cover pb-[50px]"
                        src={imageSource1}
                        alt="Yummy food"
                    />
                </div>
                <div className="bg-sbeige h-[3000px]">
                    <header className="text-center py-12">
                        <h1 className="text-4xl font-bold text-dark">Crafted to Perfection</h1>
                        <p className="text-xl text-gray-600 mt-4">Savor the finest dishes, crafted with care and passion</p>
                    </header>

                    <section className="py-16 px-4">
                        <h2 className="text-3xl font-semibold text-center text-dark mb-8">Vegetarian Delights</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                                <img src="./src/assets/images/caprese salad.jpg" alt="Vegetarian Dish 1"
                                     className="w-full h-48 object-cover" />
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold">Caprese Salad</h3>
                                    <p className="text-gray-600 mt-2">
                                        {showFullDescription ? (
                                            "Caprese salad is a fresh and simple Italian dish made with ripe tomatoes, creamy mozzarella cheese, fresh basil leaves, and a drizzle of olive oil. Often seasoned with salt, pepper, and a splash of balsamic vinegar, this light, flavorful salad captures the essence of Italian ingredients. It's a perfect appetizer or side dish, especially during summer when tomatoes are at their peak."
                                        ) : (
                                            "Caprese salad is a fresh and simple Italian dish made with ripe tomatoes, mozzarella cheese, fresh basil leaves, and olive oil. It's a light and flavorful dish, perfect for summer..."
                                        )}
                                    </p>
                                    <button
                                        className="mt-2 text-blue-500 hover:underline"
                                        onClick={() => setShowFullDescription(!showFullDescription)}
                                    >
                                        {showFullDescription ? "Show Less" : "Learn More"}
                                    </button>
                                </div>
                            </div>
                            {/* Other vegetarian dishes can follow here */}
                        </div>
                    </section>
                    {/* Other sections for non-vegetarian dishes and footer */}
                </div>
                <Footer />
            </div>
        </>
    );
};

export default Menu;
