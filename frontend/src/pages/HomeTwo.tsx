import {useEffect} from "react";
import {FiMinus} from "react-icons/fi";

const HomeTwo = () => {
    useEffect(() => {
        document.title = "HomeTwo"
    }, []);

    return (
    <>
        <button className="flex flex-col">
            <FiMinus className="scale-x-150 size-8" />
            <FiMinus className="scale-x-150 size-8 -mt-6" />
            <FiMinus className="scale-x-150 size-8 -mt-6" />
        </button>
    </>
    )
}


export default HomeTwo