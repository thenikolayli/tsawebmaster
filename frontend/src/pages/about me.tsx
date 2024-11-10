import {useEffect} from "react";
import Sidebar from "../components/Sidebar.tsx";

const Me = () => {
    useEffect(() => {
        document.title = "HomeTwo"
    }, []);

    return (
        <>
         <Sidebar/> *
        <h1 className="flex flex-col sbeige px-20 py-10 "> Hello Chat </h1>
        <div className="columns-5xs z-10 ">
            
            <img className="w-full aspect-square z-10" src="https://d303frzni7t4jb.cloudfront.net/2024_11_10_c6c167b9-052f-4662-97a0-a886ef55e3a4?Expires=1731453702&Signature=DEUqOhbE8l04CAVeCcwyWYyyVv0I5EX~OvEv44HvY-jfvuCJcJB6aTEEKGBSfxapqKe1ep-dGrHdq-4ZrQWoCUdbCJOz3XBcdak7CS5-th1F33sgcITy8tCNRgiclhvfWyHOBQDNDnW0~K2NJkvt9QjBOCJOPkfLPiQMlFZijiUG9GIsD4w1iSExytaYc~AhP2xxefF6vhVivem-83zLio26nGwI7OjD7yTWp8wBRBKH08EOt7C5Bim8BAFj4H5lHfrP81Yu58YR8jmjeGc-S1CgBxVKs3ebDew3sOR-~4ZlYF84e4LqgYsE9~ZjvVy0x1lG8pjaz6MBCLtUG6MNsA__&Key-Pair-Id=KTUQ5O0UDZ92B" />
        </div>

        </>
    )
}


export default Me