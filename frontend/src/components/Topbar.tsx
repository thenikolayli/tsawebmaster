import {createPortal} from "react-dom";

const Topbar = () => {

    return (
        createPortal(
            <>
                <div className="grid-cols-3 space-x-4 rounded-full backdrop-blur-md h-fit p-4 mt-2">
                    <a href="/"
                       className="text-xl hover:text-sbeige/50 transition duration-300 font-lato text-sbeige">Home</a>
                    <a href="/menu"
                       className="text-xl hover:text-sbeige/50 transition duration-300 font-lato text-sbeige">Menu</a>
                    <a href="/aboutus"
                       className="text-xl hover:text-sbeige/50 transition duration-300 font-lato text-sbeige">About Us</a>
                </div>
            </>,
            document.getElementById("sidebar")!
        )
    )
}

export default Topbar