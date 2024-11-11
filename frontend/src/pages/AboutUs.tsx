import {useEffect} from "react";
import Topbar from "../components/Topbar.tsx";

const AboutUs = () => {
    useEffect(() => {
        document.title = "Menu"
    }, []);

    return (
        <div className="h-screen bg-sbeige">
            <Topbar />
            <div className="bg-bcitrus/50 py-2">
                <h1 className="text-4xl font-playfair text-center">About Us</h1>
            </div>
            <div className="text-center">

            </div>
        </div>
    )
}


export default AboutUs