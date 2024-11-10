import {useEffect} from "react";
import Sidebar from "../components/Sidebar.tsx";

const Menu = () => {
    useEffect(() => {
        document.title = "HomeTwo"
    }, []);

    return (
        <>
            <Sidebar />
        </>
    )
}


export default Menu