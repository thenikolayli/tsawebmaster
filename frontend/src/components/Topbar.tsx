import { createPortal } from "react-dom";
import { useState, useEffect } from "react";

const Topbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 830);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return createPortal(
        <div className="relative">
            <div className="absolute top-full left-0 w-full h-16 bg-transparent pointer-events-none"></div>

            <div
                className={`hidden lg:flex lg:justify-center lg:space-x-20 lg:rounded-full lg:p-4 lg:transition-all lg:duration-150 ${
                    scrolled ? "lg:text-black" : "lg:text-sbeige"
                } w-full max-w-screen-xl mx-auto`}
            >
                <ul className="flex lg:space-x-[100px]">
                    <a
                        href="/"
                        className="text-xl hover:text-sbeige/50 transition-all duration-150 font-lato text-inherit hover:font-bold hover:text-white "
                    >
                        Home
                    </a>
                    <a
                        href="/locations"
                        className="text-xl hover:text-sbeige/50 transition-all duration-150 font-lato text-inherit hover:font-bold hover:text-white "
                    >
                        Locations
                    </a>
                    <a
                        href="/menu"
                        className="text-xl hover:text-sbeige/50 transition-all duration-150 font-lato text-inherit hover:font-bold hover:text-white "
                    >
                        Menu
                    </a>
                    <a
                        href="/aboutus"
                        className="text-xl hover:text-sbeige/50 transition-all duration-150 font-lato text-inherit hover:font-bold hover:text-white "
                    >
                        About Us
                    </a>
                    <a
                        href="/careers"
                        className="text-xl hover:text-sbeige/50 transition-all duration-150 font-lato text-inherit hover:font-bold hover:text-white "
                    >
                        Careers
                    </a>
                </ul>
            </div>

            <div className={`lg:hidden fixed top-0 left-0 z-[1000]`}>
                <input type="checkbox" id="sidebar-active" className="hidden peer" />

                {/* Hamburger Menu */}
                <label
                    htmlFor="sidebar-active"
                    className="fixed z-[1001] p-4 backdrop: text-white cursor-pointer peer-checked:hidden"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="45px"
                        viewBox="0 -960 960 960"
                        width="45px"
                        fill="#FFFFFF"
                        className="transition-all duration-300 ease-in-out"
                    >
                        <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                    </svg>
                </label>

                <div className="fixed inset-y-0 left-0 w-[95%] bg-blueGray-900 text-white transform -translate-x-full transition-transform duration-300 peer-checked:translate-x-0 z-[1000]">
                    <div className="p-6">
                        <label
                            htmlFor="sidebar-active"
                            className="cursor-pointer text-gray-400 hover:text-white"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="45px"
                                viewBox="0 -960 960 960"
                                width="45px"
                                fill="#FFFFFF"
                                className="transition-all duration-300 ease-in-out"
                            >
                                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                            </svg>
                        </label>
                    </div>
                    <nav className={`flex flex-col p-6 space-y-4`}>
                        <a
                            href="/"
                            className="text-lg font-medium hover:text-gray-300"
                        >
                            Home
                        </a>
                        <a
                            href="/loco"
                            className="text-lg font-medium hover:text-gray-300"
                        >
                            Locations
                        </a>
                        <a
                            href="/menu"
                            className="text-lg font-medium hover:text-gray-300"
                        >
                            Menu
                        </a>
                        <a
                            href="/aboutus"
                            className="text-lg font-medium hover:text-gray-300"
                        >
                            About Us
                        </a>
                        <a
                            href="/careers"
                            className="text-lg font-medium hover:text-gray-300"
                        >
                            Careers
                        </a>
                    </nav>
                </div>
            </div>
        </div>,
        document.getElementById("topbar")!
    );
};

export default Topbar;
