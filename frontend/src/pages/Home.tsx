import Topbar from "../components/Topbar.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {useEffect} from "react";
import Footer from "./Footer.tsx";
import {createPortal} from "react-dom";

const Home = () => {
    useEffect(() => {
        document.title = "Home";
    }, []);

    const logo = "./src/assets/images/olivedelights-logo.png";
    const imageSource = "./src/assets/gifs/homescreen.gif";

    return createPortal(
        <div>
            <Topbar />
            <div className="bg-sbeige min-h-screen">
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
                    <div className="z-20 absolute w-fit h-fit inset-0 mx-auto top-[80%] flex space-x-4">
                        <button
                            className="bg-sbeige text-olivegreen px-6 py-3 rounded-full hover:bg-sbeige/70 transition duration-300 flex items-center justify-center space-x-2">
                            <FontAwesomeIcon icon={faClock} className="text-olivegreen fill-current"/>
                            <span className="text-olivegreen">Reserve</span>
                        </button>
                        <button
                            className="bg-sbeige text-olivegreen px-6 py-3 rounded-full hover:bg-sbeige/70 transition duration-300 flex items-center justify-center space-x-2">
                            <FontAwesomeIcon icon={faArrowRight} className="text-olivegreen fill-current"/>
                            <span className="text-olivegreen">Order</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className="bg-sbeige h-[3000px]"></div>
            <Footer/>
        </div>,
    document.getElementById("root")!
    );
};

export default Home;