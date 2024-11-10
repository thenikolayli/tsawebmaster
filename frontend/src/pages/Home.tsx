import {useEffect} from "react";

const Home = () => {
    useEffect(() => {
        document.title = "Home"
    }, []);

    return (
    <>
        <label className = "hamburger-menu">
            <input type="checkbox"/>
        </label>
        <aside className="sidebar">
            <nav>
                <div className="topnav">
                    <a className="hover">Home</a>
                    <a className="hover">Menu</a>
                    <a className="hover">item</a>
                </div>
            </nav>
        </aside>
    </>
    )
}


export default Home