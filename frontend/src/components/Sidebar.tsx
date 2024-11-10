import {useState} from "react";
import {FiMinus} from "react-icons/fi";
import clsx from "clsx";

const Sidebar = () => {
    const [visible, setVisible] = useState(false);
    const handleClick = () => setVisible(!visible);

    return (
        <>
            <button onClick={handleClick} className="flex flex-col p-4 z-20 absolute">
                <FiMinus className={clsx("scale-x-150 size-8 text-dcharcoal -mt-4 transition duration-300", {
                    "rotate-45 translate-y-1/4": visible,
                    "rotate-0": !visible,
                })}/>
                <FiMinus className={clsx("scale-x-150 size-8 text-dcharcoal -mt-6 transition duration-300", {
                    "opacity-0": visible,
                    "opacity-100": !visible,
                })}/>
                <FiMinus className={clsx("scale-x-150 size-8 text-dcharcoal -mt-6 transition duration-300", {
                    "-rotate-45 -translate-y-1/4": visible,
                    "rotate-0": !visible,
                })}/>
            </button>
            <div className={clsx("bg-wolive w-fit h-screen px-20 py-20 transition duration-300", {
                "translate-x-0": visible,
                "-translate-x-full": !visible,
            })}>
                <ul className="disc-none mt-8">
                    <div className="font-mono flex flex-col space-y-10"> 
                    <a href="/home" className="text-xl text-sbeige hover:text-dcharcoal transition duration-300">Home</a>
                     <a href="/menu" className="text-xl text-sbeige hover:text-dcharcoal transition duration-300">Menu</a>
                    <a href="/aboutme" className="text-xl text-sbeige hover:text-dcharcoal transition duration-300">About us</a>
                    </div>
                </ul>
            </div>
        </>
    )
}

export default Sidebar