import { useEffect } from "react";
import Topbar from "../components/Topbar.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Footer from "./footer.tsx";

const Home = () => {
    useEffect(() => {
        document.title = "Home";
    }, []);

    const logo = "./src/assets/olivedelights-logo.png";
    const imageSource =
        "https://d303frzni7t4jb.cloudfront.net/2024_11_11_ea507918-4eb8-4a23-8014-8a7b9506daf4?Expires=1731652698&Signature=CRC~hPJf-lrSfjVk7ZwDUFbWHgHSGQkRiQ6LQaeRSmFUckbiJbVa8TpNyHrX2bWenx67TPQ~5Ei6p4hwMFlq~4ECwpXE5nWJzuBy-L2reUdJH9M10DocW9gvCrKREIx7ADXOagaw4-I8C~a1XgUEtCSC86Oc3j-o-8zAI822l39-q70F~f1dRxRyiZiCQZbawjXvXqwad6KYu~B0fMHt1zXZo7EUF3NnCM1ALgrKXAjNIW5uKv1O6-o~JgPV7rvnRRSaT--ZRa~sfMcm1pv-hn76pcl6tauk2npJg0Th5AzAF9MG~kfovKXJ9kotDLrvKwlWhHxwyLSTd5IAdQesUA__&Key-Pair-Id=KTUQ5O0UDZ92B";

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
                    <div className="z-20 absolute w-fit h-fit inset-0 mx-auto top-[80%] flex space-x-4">
                        <button className="bg-sbeige text-olivegreen px-6 py-3 rounded-full hover:bg-sbeige/70 transition duration-300 flex items-center justify-center space-x-2">
                            <FontAwesomeIcon icon={faClock} className="text-olivegreen fill-current" />
                            <span className="text-olivegreen">Reserve</span>
                        </button>
                        <button className="bg-sbeige text-olivegreen px-6 py-3 rounded-full hover:bg-sbeige/70 transition duration-300 flex items-center justify-center space-x-2">
                            <FontAwesomeIcon icon={faArrowRight} className="text-olivegreen fill-current" />
                            <span className="text-olivegreen">Order</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className="bg-sbeige h-[3000px]"></div>

            <Footer />
        </>
    );
};

export default Home;
