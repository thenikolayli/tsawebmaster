import {createPortal} from "react-dom";

const Topbar = () => {

    return (
        createPortal(
            <>
                <div className="z-30 grid-cols-3 space-x-20 rounded-full p-4">
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