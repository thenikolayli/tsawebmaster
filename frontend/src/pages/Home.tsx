import { useEffect } from "react";
import Topbar from "../components/Topbar.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
    useEffect(() => {
        document.title = "Home";
    }, []);
    const logo = "./src/assets/olivedelights-logo.png";
    const imageSource =
        "https://d303frzni7t4jb.cloudfront.net/2024_11_11_00dacf18-f5e4-4ec1-b57f-c7e588b57609?Expires=1731474944&Signature=IvjrTyUJFtEMas5UJCwqzKiUWPEShIi-fYnrkRzIByX5ioBh8VsSvTgE~Co6CjOt8MGKFrTcInJNLuZZ1~j7w00dUYGqs8Yph4H9nukG1dnftzeKFfFfUg6jB7XRKszNcaAxxUZpxjsh72Yxne9khqMmKInXnYmR38LNmQp~VA1CJt6IekyxdKoXnh5TlYaguOI~SX8zhJLU-w8A8xHKEa1zIVM4~-M4QRtbggRfq7UDua3zim70R~krOuE61Nb1jKYhO6yDu0~kTEUtsT0lrL2UAhgj-9o6t-OSMsB2qQsJ99ey5zj53UBEHJA0iSvkHH1F5-9e-jSHsVnJZl-Ofg__&Key-Pair-Id=KTUQ5O0UDZ92B";

    return (
        <>
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
                    <div
                        className="z-20 absolute w-fit h-fit inset-0 mx-auto top-[80%] flex space-x-4">
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
        </>
    );
};

export default Home;
