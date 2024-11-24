import {useEffect} from "react";
import Topbar from "../components/Topbar.tsx";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import {faArrowRight, faClock} from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer.tsx"

const Menu = () => {
    useEffect(() => {
        document.title = "Menu"
    }, []);

    const logo1 = "./src/assets/mstarter.png";
    const imageSource1 =
        "https://d303frzni7t4jb.cloudfront.net/2024_11_11_4fafc591-4891-4e53-948a-20ac41b23acf?Expires=1731539040&Signature=TeAFuFWX74PMOa6DfsOXNPkp6EsNx6kQuwDjUH3Qo79SoEpJ7kWh6T~nb146lS267wg7jRh8NhraCuliDyLa58n~pk04enrwx9IASV7zeoSeRrS17YqsbabWQofk66CTqgRTjeu7B7J1czPzU-wqP9UVgn7YamMlWIvl0XAvjigtEZ8AK~JctosWHqLdwqzw-Fezme~kiPboa5E31HvqWiRHNtMGtScfYzfdSiHToTtLKZ0Jnh-dFoSmB8rQJzo4iW-o1hhNF-yX5vIyd4JcSzj2AyrDJjGMFzpI7ydmLK9gaYIiP8Igy6axbjR53JxCmRKFHpT5PeJFtO5oW6NKaA__&Key-Pair-Id=KTUQ5O0UDZ92B";

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