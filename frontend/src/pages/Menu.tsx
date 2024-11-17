import {useEffect} from "react";
import Topbar from "../components/Topbar.tsx";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import {faArrowRight, faClock} from "@fortawesome/free-solid-svg-icons";
import Footer from "./Footer.tsx"

const Menu = () => {
    useEffect(() => {
        document.title = "Menu"
    }, []);

    const logo1 = "./src/assets/images/mstarter.png";
    const imageSource1 = "./src/assets/gifs/menuscreen.gif"
    return (
        <>
            <Topbar />
            <div className="bg-sbeige">
                <div className="relative h-screen">
                    <img
                        className="w-23 inset-2 object-contain absolute mx-auto"
                        style={{transform: 'translateY(200px)'}}
                        src={logo1}
                        alt="Logo"
                    />
                    <img
                        className="z-0 w-full max-h-[calc(100vh-20px)] object-cover pb-[50px]"
                        src={imageSource1}
                        alt="Yummy food"
                    />
                </div>
            <Footer/>
        </div>
        </>
    );
};
export default Menu