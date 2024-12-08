import { useEffect } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight, faClock} from "@fortawesome/free-solid-svg-icons";

const Elements = () => {
    useEffect(() => {
        document.title = "Elements"
    }, []);

    return (
        <>
            <div className={"relative z-20 top-[80%] "}>
                <div className="z-20 absolute w-fit h-fit inset-0 mx-auto flex space-x-4 pointer-events-auto">
                    <button
                        className="bg-sbeige text-olivegreen px-6 py-3 rounded-full hover:bg-sbeige/70 transition duration-300 flex items-center justify-center space-x-2 cursor-pointer"
                    >
                        <FontAwesomeIcon icon={faClock} className="text-olivegreen fill-current"/>
                        <a href="reserve/" className="text-olivegreen">Reserve</a>
                    </button>
                    <button
                        className="bg-sbeige text-olivegreen px-6 py-3 rounded-full hover:bg-sbeige/70 transition duration-300 flex items-center justify-center space-x-2 cursor-pointer"
                    >
                        <FontAwesomeIcon icon={faArrowRight} className="text-olivegreen fill-current"/>
                        <a href="order/" className="text-olivegreen">Order</a>
                    </button>
                </div>
            </div>
        </>

    );
};

export default Elements