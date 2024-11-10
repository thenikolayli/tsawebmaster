import {useEffect} from "react";
import Sidebar from "../components/Sidebar.tsx";

const Home = () => {
    useEffect(() => {
        document.title = "HomeTwo"
    }, []);

    return (
        <>
            <Sidebar />
        </>
    )
}


export default Home