import {useEffect} from "react";
import Sidebar from "../components/Sidebar.tsx";

const Home = () => {
    useEffect(() => {
        document.title = "HomeTwo"
    }, []);

    return (
        <>
            <Sidebar />
            <div className="pt-12 bg-sbeige h-screen text-center">
                <h1 className="text-xl font-lato">this is lato</h1>
                <h1 className="text-xl font-playfair">this is playfair</h1>
            </div>
        </>
    )
}


export default Home