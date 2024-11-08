import {useEffect} from "react";

const Home = () => {
    useEffect(() => {
        document.title = "Home"
    }, []);

    return (
        <>
        <h1 className="text-wolive">
            Hello, World!
            This is the Home page!
        </h1>
        </>
    )
}

export default Home;