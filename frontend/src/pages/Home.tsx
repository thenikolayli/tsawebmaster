import { createPortal } from "react-dom";
import { useState, useEffect } from "react";

const Topbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [textColor, setTextColor] = useState('text-sbeige');  // Default color

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 830) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        if (scrolled) {
            setTextColor('text-white');
        } else {
            setTextColor('text-sbeige');
        }
    }, [scrolled]);

    return createPortal(
        <div className="relative">
            <div className="absolute top-[64px] left-0 w-full h-16 bg-transparent pointer-events-none z-20"></div>

            <div
                className={`fixed top-0 left-0 w-full z-30 grid-cols-3 space-x-20 rounded-full p-4 transition-all duration-150 ${textColor}`}
            >
                <a
                    href="/"
                    className="text-xl hover:text-sbeige/50 transition-all duration-150 font-lato text-inherit hover:font-bold hover:text-white"
                >
                    Home
                </a>
                <a
                    href="/loco"
                    className="text-xl hover:text-sbeige/50 transition-all duration-150 font-lato text-inherit hover:font-bold hover:text-white"
                >
                    Locations
                </a>
                <a
                    href="/menu"
                    className="text-xl hover:text-sbeige/50 transition-all duration-150 font-lato text-inherit hover:font-bold hover:text-white"
                >
                    Menu
                </a>
                <a
                    href="/aboutus"
                    className="text-xl hover:text-sbeige/50 transition-all duration-150 font-lato text-inherit hover:font-bold hover:text-white"
                >
                    About Us
                </a>
                <a
                    href="/careers"
                    className="text-xl hover:text-sbeige/50 transition-all duration-150 font-lato text-inherit hover:font-bold hover:text-white"
                >
                    Careers
                </a>
            </div>
        </div>,
        document.getElementById("sidebar")!
    );
};

export default Topbar;
