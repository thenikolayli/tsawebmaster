import {useEffect} from "react";
import Topbar from "../components/Topbar.tsx";
import {InstagramEmbed} from "react-social-media-embed";

const Home = () => {
    useEffect(() => {
        document.title = "Home"
    }, []);

    const imageSource = "https://d303frzni7t4jb.cloudfront.net/2024_11_10_c6c167b9-052f-4662-97a0-a886ef55e3a4?Expires=1731453702&Signature=DEUqOhbE8l04CAVeCcwyWYyyVv0I5EX~OvEv44HvY-jfvuCJcJB6aTEEKGBSfxapqKe1ep-dGrHdq-4ZrQWoCUdbCJOz3XBcdak7CS5-th1F33sgcITy8tCNRgiclhvfWyHOBQDNDnW0~K2NJkvt9QjBOCJOPkfLPiQMlFZijiUG9GIsD4w1iSExytaYc~AhP2xxefF6vhVivem-83zLio26nGwI7OjD7yTWp8wBRBKH08EOt7C5Bim8BAFj4H5lHfrP81Yu58YR8jmjeGc-S1CgBxVKs3ebDew3sOR-~4ZlYF84e4LqgYsE9~ZjvVy0x1lG8pjaz6MBCLtUG6MNsA__&Key-Pair-Id=KTUQ5O0UDZ92B"
    const foodGuy = "https://www.instagram.com/p/DCN3Rkdpy0g/"
    const cat = "https://www.instagram.com/p/DBJN6DZzAnV/?hl=en&img_index=1"
    const cake = "https://www.instagram.com/p/DCHfg_ZvSPQ/"

    return (
        <div className="bg-sbeige ">
            <img className="w-full" src={imageSource} alt="Yummy food" />
            <Topbar/>
            <h1 className="text-4xl font-playfair text-center py-4">Experience tranquility</h1>
            <div className="grid grid-cols-3">
                <InstagramEmbed className="py-4 flex justify-self-center" url={cat} />
                <InstagramEmbed className="py-4 flex justify-self-center" url={foodGuy} />
                <InstagramEmbed className="py-4 flex justify-self-center" url={cake} />
            </div>
        </div>
    )
}



export default Home