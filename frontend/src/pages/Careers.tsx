import {useEffect} from "react";
import Topbar from "../components/Topbar.tsx";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import {faArrowRight, faClock} from "@fortawesome/free-solid-svg-icons";

const Careers = () => {
    useEffect(() => {
        document.title = "Menu"
    }, []);

    return (
        <>
            <Topbar />
            <div className="bg-sbeige">
                <div className="relative h-screen">
                    <p> Careers here you go have fun</p>
                </div>
            </div>
        </>
    );
};
export default Careers