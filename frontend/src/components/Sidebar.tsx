import {useState} from "react";
import {FiMinus} from "react-icons/fi";
import clsx from "clsx";
import {createPortal} from "react-dom";

const Sidebar = () => {
    const [visible, setVisible] = useState(false);
    const handleClick = () => setVisible(!visible);

    return (
        createPortal(
            <>
                <button onClick={handleClick} className="flex flex-col m-4 z-10 absolute">
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
                <div className={clsx("bg-wolive w-fit h-screen z-0 p-20 transition duration-300", {
                    "translate-x-0": visible,
                    "-translate-x-full": !visible,
                })}>
                        <ul className="disc-none mt-10">
                            <div className="space-y-6">
                                <li><a href="/home"
                                       className="text-xl font-lato text-sbeige hover:text-dcharcoal transition duration-300">Home</a>
                                </li>
                                <li><a href="/menu"
                                       className="text-xl font-lato text-sbeige hover:text-dcharcoal transition duration-300">Menu</a>
                                </li>
                                <li><a href="/AboutMe"
                                       className="text-xl font-lato text-sbeige hover:text-dcharcoal transition duration-300">About
                                    us</a></li>
                            </div>

                        </ul>

                </div>
            </>,
            document.getElementById("sidebar")!
        )
    )
}

export default Sidebar