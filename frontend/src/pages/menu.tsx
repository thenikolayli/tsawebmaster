import {useEffect} from "react";

const menu = () => {
    useEffect(() => {
        document.title = "Home"
    }, []);

    return (
    <>
    <p> it worked! </p>
    <label className = "hamburger-menu"> 
        <input type="checkbox"/>
    </label>
    <aside className="sidebar"> 
        <nav> 
        <div className="topnav">
            <a className="hover">Home</a>
            <a className="hover" href="menu.tsx">Menu</a>
            <a className="hover">item</a>
        </div>
        </nav>
    </aside>
    </>

    )
}


export default menu