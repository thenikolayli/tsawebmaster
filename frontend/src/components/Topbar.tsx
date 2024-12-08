import { createPortal } from "react-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useState} from "react";
import {clsx} from "clsx";
import {faBars, faXmark} from "@fortawesome/free-solid-svg-icons";

const Topbar = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    return createPortal(
        <>
            <nav className="hidden rounded-full bg-black/30 mt-4 backdrop-blur sm:flex justify-self-center text-xl font-lato text-sbeige p-4 space-x-8">
                <a href="/" className="hover:text-sbeige/50 transition duration-150">
                    Home
                </a>
                <a href="/menu" className="hover:text-sbeige/50 transition duration-150">
                    Menu
                </a>
                <a href="/aboutus" className="hover:text-sbeige/50 transition duration-150">
                    About us
                </a>
                <a href="/careers" className="hover:text-sbeige/50 transition duration-150">
                    Careers
                </a>
            </nav>

            <nav className="sm:hidden">
                <button onClick={() => setShowSidebar(!showSidebar)}><FontAwesomeIcon icon={faBars} className="text-sbeige size-8 p-2 m-2 bg-black/30 backdrop-blur rounded-lg" /></button>
                <div className={clsx("fixed top-0 left-0 w-[95%] h-screen bg-blueGray-900 text-sbeige transition duration-300", {
                    "-translate-x-full": !showSidebar
                })}>
                    <button onClick={() => setShowSidebar(!showSidebar)}>
                        <FontAwesomeIcon icon={faXmark} className="text-sbeige size-8 p-4"/>
                    </button>
                    <nav className="flex flex-col p-6 space-y-4 text-xl text-sbeige font-lato">
                        <a href="/" className="hover:text-sbeige/50 transition duration-150">
                            Home
                        </a>
                        <a href="/menu" className="hover:text-sbeige/50 transition duration-150">
                            Menu
                        </a>
                        <a href="/aboutus" className="hover:text-sbeige/50 transition duration-150">
                            About us
                        </a>
                        <a href="/careers" className="hover:text-sbeige/50 transition duration-150">
                            Careers
                        </a>
                    </nav>
                </div>
            </nav>
        </>,
        document.getElementById("topbar")!
    );
};

export default Topbar;
