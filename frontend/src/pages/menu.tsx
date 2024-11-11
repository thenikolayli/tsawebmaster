import {useEffect} from "react";
import Sidebar from "../components/Sidebar.tsx";

const Menu = () => {
    useEffect(() => {
        document.title = "Menu"
    }, []);

    return (
        <div className="h-screen bg-sbeige">
            <Sidebar />
            <div className="bg-bcitrus/50 py-2">
                <h1 className="text-4xl font-playfair text-center">Our Menu</h1>
            </div>
            <div className="text-center">

            </div>
        </div>
    )
}

export default Menu