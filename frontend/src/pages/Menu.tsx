import {useEffect} from "react";
import Topbar from "../components/Topbar.tsx";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import {faArrowRight, faClock} from "@fortawesome/free-solid-svg-icons";

const Menu = () => {
    useEffect(() => {
        document.title = "Menu"
    }, []);

    const logo1 = "./src/assets/olivedelights-logo.png";
    const imageSource1 =
        "https://d303frzni7t4jb.cloudfront.net/2024_11_11_00dacf18-f5e4-4ec1-b57f-c7e588b57609?Expires=1731474944&Signature=IvjrTyUJFtEMas5UJCwqzKiUWPEShIi-fYnrkRzIByX5ioBh8VsSvTgE~Co6CjOt8MGKFrTcInJNLuZZ1~j7w00dUYGqs8Yph4H9nukG1dnftzeKFfFfUg6jB7XRKszNcaAxxUZpxjsh72Yxne9khqMmKInXnYmR38LNmQp~VA1CJt6IekyxdKoXnh5TlYaguOI~SX8zhJLU-w8A8xHKEa1zIVM4~-M4QRtbggRfq7UDua3zim70R~krOuE61Nb1jKYhO6yDu0~kTEUtsT0lrL2UAhgj-9o6t-OSMsB2qQsJ99ey5zj53UBEHJA0iSvkHH1F5-9e-jSHsVnJZl-Ofg__&Key-Pair-Id=KTUQ5O0UDZ92B";

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
            </div>
        </>
    );
};
export default Menu