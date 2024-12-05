import { useEffect } from "react";
import Topbar from "../components/Topbar.tsx";
import Footer from "../components/Footer.tsx";

const Faq = () => {
    useEffect(() => {
        document.title = "Faq"
    }, []);

    const imageSource1 = "./src/assets/gifs/faq-page.gif"

    const faqData = [
        {
            title: "What are the signature dishes at Olive Delights?",
            content: "Olive Delights takes pride in its signature dishes that showcase the best of vegan Italian-Mediterranean cuisine. Highlights include our Wood-Fired Vegan Margherita Pizza, made with cashew-based mozzarella and fresh basil; Eggplant Rollatini, featuring roasted eggplant filled with cashew ricotta and baked in a robust tomato sauce; and Vegan Mushroom Risotto, a creamy and earthy delight infused with wild mushrooms and vegan Parmesan."
        },
        {
            title: "Does Olive Delights use organic and locally sourced ingredients?",
            content: "Absolutely! At Olive Delights, we prioritize using organic, locally sourced ingredients to create fresh, sustainable, and flavorful meals. By supporting local farmers and producers, we ensure that our dishes not only taste great but are also made with the highest quality produce. From heirloom tomatoes to fresh herbs, every ingredient is carefully selected to maintain the authenticity and integrity of our menu."
        },
        {
            title: "Can I book a table for a special event or group gathering?",
            content: "Of course! Olive Delights welcomes group reservations and special events, offering a perfect setting for any occasion. Whether you're planning a family dinner, a celebration, or a business gathering, our team will work with you to accommodate your needs. Simply contact us at least 48 hours in advance to discuss your requirements, and we'll ensure your event is tailored to your preferences."
        }
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <Topbar />
            <div className="bg-sbeige flex-grow">
                <div className="relative">
                    <img
                        className="w-23 inset-2 object-contain absolute mx-auto"
                        style={{transform: 'translateY(200px)'}}
                    />
                    <img
                        className="z-0 w-full max-h-[calc(100vh-20px)] object-cover pb-[50px]"
                        src={imageSource1}
                    />
                    <div className="bg-sbeige">
                            <div
                                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex space-x-4 w-full max-w-6xl">
                                {faqData.map((item, index) => (
                                    <div
                                        key={index}
                                        className="bg-navy-blue text-white p-6 rounded-lg shadow-lg font-sans flex-1"
                                        style={{
                                            backgroundColor: 'rgba(4, 59, 92, 0.82)'
                                        }}
                                    >
                                        <h2 className="text-xl font-bold mb-4 font-lato">{item.title}</h2>
                                        <p className="text-base font-light">
                                            {item.content}
                                        </p>
                                    </div>
                                ))}
                            </div>

                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Faq;
