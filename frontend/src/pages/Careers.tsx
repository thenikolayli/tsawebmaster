import { useEffect } from "react";
import Topbar from "../components/Topbar.tsx";
import Footer from "../components/Footer.tsx";
import workerGif from "../assets/gifs/Careers.gif";
//hi

const roles = [
    { title: "Chef", description: "As a chef, you will work with our team to craft delicious, plant-based dishes using fresh ingredients, ensuring that every dish meets our high standards.", key: 0 },
    { title: "Server", description: "We are looking for friendly, energetic servers who are passionate about providing an exceptional dining experience for our guests. Excellent customer service is a must!", key: 1 },
    { title: "Marketing Specialist", description: "Help us grow our brand and reach new customers. We need someone creative with experience in digital marketing to handle our campaigns and social media.", key: 2 },
    { title: "Kitchen Assistant", description: "Join our kitchen team to help prep and organize ingredients. A great opportunity for those passionate about food and looking to develop their culinary skills.", key: 3 },
    { title: "Social Media Manager", description: "Join our team as a Social Media Manager! If you're creative, passionate about online engagement, and know the latest social media trends, we'd love to have you onboard!", key: 4 },
];

const benefits = [
    { title: "Competitive Pay", description: "We value your hard work and dedication, offering a salary that reflects your skills and experience.", icon: "💰" },
    { title: "Flexible Scheduling", description: "Balance your work and personal life with our adaptable scheduling options.", icon: "⏰" },
    { title: "Growth Opportunities", description: "We invest in our team's development, providing pathways for career advancement.", icon: "🌱" },
];

const testimonials = [
    {
        name: "Josh Mahomes",
        role: "Chef",
        feedback: "Working at Olive Delights has been an amazing experience. The team is supportive, and the environment is full of creativity. I love being a part of such an innovative kitchen!",
    },
    {
        name: "Patrick Allen",
        role: "Server",
        feedback: "As a server at Olive Delights, I feel like part of a family. The flexibility in scheduling and the positive atmosphere make it a great place to work!",
    },
    {
        name: "Geno Wilson",
        role: "Marketing Specialist",
        feedback: "I love the opportunity to grow and bring new ideas to the table. The company values innovation, and that makes it exciting to work here every day!",
    },
];

const Careers = () => {
    useEffect(() => {
        document.title = "Careers";
    }, []);

    const scroll = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            window.scrollTo({
                top: section.offsetTop,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="min-h-screen bg-sbeige">
            <Topbar />

            <div className="relative w-full h-[500px] bg-cover bg-center flex items-center justify-center"
                 style={{backgroundImage: `url(${workerGif})`}}>
                <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center">
                    <h1 className="text-4xl text-white font-bold text-center px-6 mb-4 font-playfair">Join Our Team at Olive Delights</h1>
                    <button
                        onClick={() => scroll("careers")}
                        className="py-4 px-10 bg-olivegreen text-white text-xl font-semibold shadow-lg transition-transform duration-300 rounded-md hover:scale-105 hover:bg-olivegreen/80 border-2 border-white"
                    >
                        Explore Careers
                    </button>
                </div>
            </div>

            <section className="bg-olivegreen text-black py-16" id="why-work">
                <div className="px-6 md:px-12 lg:px-24 text-center font-playfair">
                    <h3 className="text-3xl font-semibold mb-6 font-playfair">Why Work at Olive Delights?</h3>
                    <p className="text-lg max-w-4xl mx-auto mb-8 leading-7 font-lato">
                        At Olive Delights, we foster a culture of innovation, sustainability, and creativity...
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-lato">
                        {benefits.map(({title, description, icon}, index) => (
                            <div key={index}
                                 className="flex flex-col items-center bg-white border border-olivegreen rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                                <span className="text-4xl mb-4">{icon}</span>
                                <h4 className="text-xl font-bold mb-2 text-olivegreen">{title}</h4>
                                <p>{description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-sbeige py-16" id="testimonials">
                <div className="px-6 md:px-12 lg:px-24 text-center font-lato">
                    <h3 className="text-3xl font-semibold mb-6 text-olivegreen font-playfair">What Our Employees Say</h3>
                    <div className="flex flex-wrap justify-center gap-8">
                        {testimonials.map(({name, role, feedback}, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-lg max-w-xs text-center">
                                <p className="italic mb-4">"{feedback}"</p>
                                <h4 className="font-bold text-olivegreen">{name}</h4>
                                <p className="text-gray-600">{role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-olivegreen text-black py-16" id="culture">
                <div className="px-6 md:px-12 lg:px-24 text-center">
                    <h3 className="text-3xl font-semibold mb-6 font-playfair">Our Company Culture</h3>
                    <p className="text-lg max-w-4xl mx-auto mb-8 leading-7 font-lato">
                        Olive Delights is more than just a workplace; it's a community. Our culture is built on respect,
                        collaboration, and a shared passion for food. We value diversity, creativity, and work-life
                        balance, making sure our team feels supported both in and out of the kitchen.
                    </p>
                </div>
            </section>

            <section className="bg-sbeige py-16 text-center" id="separator">
                <h2 className="text-3xl font-semibold text-olivegreen mb-6 font-playfair">Ready to Join the Olive Delights Family?</h2>
                <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-8 font-lato">
                    Explore our open positions below and take the next step in your career...
                </p>
            </section>

            <section className="px-6 md:px-12 lg:px-24" id="careers">
                <h2 className="text-3xl font-semibold text-center text-olivegreen mb-8 font-playfair">Open Positions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 font-lato">
                    {roles.map(({title, description, key}) => (
                        <div key={key}
                             className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold text-olivegreen mb-4">{title}</h3>
                                <p className="text-lg text-gray-700 mb-6">{description}</p>
                            </div>
                        </div>
                    ))}

                    <div className="flex items-center justify-start lg:col-span-1 lg:ml-8 mt-8 lg:mt-0">
                        <a href="https://forms.gle/sjqnRqPSHiB32vQ67" target="_blank"
                           className="block text-center bg-black hover:bg-black/80 text-white font-bold py-6 px-12 rounded-full text-xl transition-all duration-500 transform hover:scale-110 hover:shadow-2xl shadow-lg">
                            Apply Now
                        </a>
                    </div>
                </div>
            </section>
            <div>mt-6</div>

            <Footer />
        </div>
    );
};

export default Careers;
