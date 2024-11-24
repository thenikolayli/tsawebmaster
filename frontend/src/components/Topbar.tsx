import { createPortal } from "react-dom";
import { useState, useEffect } from "react";

const Topbar = () => {
    const [scrolled, setScrolled] = useState(false);

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

    return createPortal(
        <div className="relative z-30">
            <div className="absolute top-full left-0 w-full h-16 bg-transparent pointer-events-none"></div>

            <div
                className={`shadow-md bg-transparent grid-cols-3 space-x-20 rounded-full p-4 transition-all duration-150 ${scrolled ? 'text-black' : 'text-sbeige'}`}
            >
                <a
                    href="/"
                    className="text-xl mix-blend-color hover:text-black/50 transition-all duration-150 font-lato text-inherit hover:font-bold text-white"
                >
                    Home
                </a>
                <a
                    href="/locations"
                    className="text-xl hover:text-black/50 transition-all duration-150 font-lato text-inherit hover:font-bold text-white"
                >
                    Locations
                </a>
                <a
                    href="/menu"
                    className="text-xl hover:text-black/50 transition-all duration-150 font-lato text-inherit hover:font-bold text-white"
                >
                    Menu
                </a>
                <a
                    href="/aboutus"
                    className="text-xl hover:text-black/50 transition-all duration-150 font-lato text-inherit hover:font-bold text-white"
                >
                    About Us
                </a>
                <a
                    href="/careers"
                    className="text-xl hover:text-black/50 transition-all duration-150 font-lato text-inherit hover:font-bold text-white"
                >
                    Careers
                </a>
            </div>
        </div>,
        document.getElementById("sidebar")!
    );
};

export default Topbar;
