import {useEffect} from "react";
import Topbar from "../components/Topbar.tsx";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import {faArrowRight, faClock} from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer.tsx";

const Menu = () => {
    useEffect(() => {
        document.title = "Menu"
    }, []);

    // const logo1 = "";
    const imageSource1 = "./src/assets/gifs/tsa menu screen.gif"
    // const fillerImage = "./src/assets/images/menuimages/fillerimage.jpeg"

    return (
        <>
            <Topbar/>
            <div className="bg-sbeige min-h-screen">
                <div className="absolute w-full overflow-hidden aspect-video">
                    <img
                        className="z-0 absolute w-full object-cover"
                        src={imageSource1}
                        alt="Yummy food"
                    />
                    {/*<img*/}
                    {/*    className="z-10 absolute w-3/5 inset-0 mx-auto top-[25%]"*/}
                    {/*    src={logo1}*/}
                    {/*/>*/}
                </div>
            </div>
            <div className="font-lato bg-sbeige min-h-screen relative text-center">

                <strong
                    className="font-playfair underline sticky top-0 flex pt-20 pb-10 z-10 items-center justify-center text-3xl backdrop-blur-md max-w-80 mx-auto">Specials</strong>

                <div className="columns-3 min-[300px]:max-lg:hidden">
                    <div className="transition duration-300 lg:hover:scale-110 ">
                        <div className="flex flex-col items-center">
                            <img src={"./src/assets/images/menuimages/capresesalad.png"} alt="Yummy food"
                                 className="mx-auto pt-5 pb-5 px-20"/>
                        </div>
                        <div className="px-10">
                            <strong className="text-2xl w-full flex items-center justify-center pb-5">Caprese
                                Salad</strong>

                            <p className='text-xl overflow-hidden max-w-80 mx-auto pb-20'>Fresh tomatoes, mozzarella,
                                basil, and a drizzle of olive oil and
                                balsamic glaze.
                            </p>

                        </div>
                    </div>

                    <div className="transition duration-300 lg:hover:scale-110">
                        <div className="flex flex-col items-center">
                            <img src={"./src/assets/images/menuimages/pastaprimavera.png"} alt="Yummy food"
                                 className="mx-auto pt-5 pb-5 px-20"/>
                        </div>

                        <div className="px-10">
                            <strong className="text-2xl w-full flex items-center justify-center pb-5">Pasta
                                Primavera</strong>

                            <p className='text-xl overflow-hidden max-w-80 mx-auto pb-20'>Pasta tossed with a medley of
                                fresh sautéed vegetables like bell peppers,
                                zucchini, cherry tomatoes, and peas.
                            </p>

                        </div>
                    </div>

                    <div className="transition duration-300 lg:hover:scale-110">
                        <div className="flex flex-col items-center">
                            <img src={"./src/assets/images/menuimages/ricesalad.png"} alt="Yummy food"
                                 className="mx-auto pt-5 pb-5 px-20"/>
                        </div>
                        <div className="px-10 item">
                            <strong className="text-2xl flex items-center justify-center pb-5">Insalata di Riso</strong>

                            <p className='text-xl overflow-hidden max-w-80 mx-auto pb-20'>A cold rice salad with
                                vegetables like peas, tomatoes, and cucumbers,
                                dressed with olive oil and vinegar.
                            </p>

                        </div>
                    </div>
                </div>

                <div className="columns-2 lg:hidden">
                    <div className="transition duration-300 lg:hover:scale-110 ">
                        <div className="flex flex-col items-center">
                            <img src={"./src/assets/images/menuimages/capresesalad.png"} alt="Yummy food"
                                 className="mx-auto pt-5 pb-5 px-10"/>
                        </div>
                        <div className="px-10">
                            <strong className="text-2xl w-full flex items-center justify-center pb-5">Caprese
                                Salad</strong>

                        </div>
                    </div>

                    <div className="transition duration-300 lg:hover:scale-110">
                        <div className="flex flex-col items-center">
                            <img src={"./src/assets/images/menuimages/pastaprimavera.png"} alt="Yummy food"
                                 className="mx-auto pt-5 pb-5 px-10"/>
                        </div>

                        <div className="px-10">
                            <strong className="text-2xl w-full flex items-center justify-center pb-5">Pasta
                                Primavera</strong>

                        </div>
                    </div>


                </div>

                <div className="transition duration-300 lg:hover:scale-110 lg:hidden">
                    <div className="flex flex-col items-center">
                        <img src={"./src/assets/images/menuimages/ricesalad.png"} alt="Yummy food"
                             className="mx-auto pt-5 pb-5 px-20"/>
                    </div>
                    <div className="px-10 item">
                        <strong className="text-2xl flex items-center justify-center pb-20">Insalata di Riso</strong>

                    </div>
                </div>


                <strong
                    className="font-playfair underline sticky top-0 flex pt-20 pb-10 z-10 items-center justify-center text-3xl backdrop-blur-md max-w-80 mx-auto">Appetizers</strong>
                <div className="columns-3 min-[300px]:max-lg:hidden">
                    <div className="transition duration-300 lg:hover:scale-110">
                    <div className="flex flex-col items-center">
                        <img src={"./src/assets/images/menuimages/pestognocchi.png"} alt="Yummy food"
                             className="mx-auto pt-5 pb-5 px-20"/>
                    </div>

                    <div className="px-10">
                        <strong className="text-2xl flex items-center justify-center pb-5">Gnocchi al Pesto</strong>

                        <p className='text-xl pb-20 flex items-center justify-center overflow-hidden max-w-80 mx-auto'>Potato
                            gnocchi served with a
                            flavorful basil pesto sauce made from fresh basil, garlic, pine nuts, Parmesan, and olive
                            oil.
                        </p>

                    </div>
                    </div>
                    <div className="transition duration-300 lg:hover:scale-110">
                    <div className="flex flex-col items-center">
                        <img src={"./src/assets/images/menuimages/arancini.png"} alt="Yummy food"
                             className="mx-auto pt-5 pb-5 px-20"/>
                    </div>

                    <div className="px-10">
                        <strong className="text-2xl flex items-center justify-center pb-5">Arancini</strong>
                        <p className='text-xl pb-20 flex items-center justify-center overflow-hidden max-w-80 mx-auto'>Fried
                            rice balls stuffed with
                            cheese, peas, and sometimes vegetables, then coated in breadcrumbs.
                        </p>

                    </div>
                    </div>

                    <div className="transition duration-300 lg:hover:scale-110">
                        <div className="flex flex-col items-center">
                            <img src={"./src/assets/images/menuimages/raviolizucca.png"} alt="Yummy food"
                                 className="mx-auto pt-5 pb-5 px-20"/>
                        </div>

                        <div className="px-10 item">
                            <strong className="text-2xl flex items-center justify-center pb-5">Ravioli di Zucca
                            </strong>

                            <p className='text-xl flex items-center justify-center overflow-hidden max-w-80 mx-auto'>Homemade
                                ravioli stuffed with a
                                sweet and savory pumpkin filling, often served with sage butter.


                            </p>

                        </div>
                    </div>

                </div>
                <div className="columns-3 min-[300px]:max-lg:hidden">
                    {/*bottom row no pb*/}
                    <div className="transition duration-300 lg:hover:scale-110">
                    <div className="flex flex-col items-center">
                        <img src={"./src/assets/images/menuimages/Fagottini-di-verdure.png"} alt="Yummy food"
                             className="mx-auto pt-5 pb-5 px-20"/>
                    </div>
                    <div className="px-10">
                        <strong className="text-2xl w-full flex items-center justify-center pb-5">Fagottini di
                            Verdure</strong>

                        <p className='text-xl pb-20 flex items-center justify-center overflow-hidden max-w-80 mx-auto'>Pastry
                            pouches filled with mixed
                            vegetables, like spinach, ricotta, or mushrooms, and baked until golden.
                        </p>

                    </div>
                    </div>
                    <div className="transition duration-300 lg:hover:scale-110">
                    <div className="flex flex-col items-center">
                        <img src={"./src/assets/images/menuimages/mushroompolenta.png"} alt="Yummy food"
                             className="mx-auto pt-5 pb-5 px-20"/>
                    </div>

                    <div className="px-10">
                        <strong className="text-2xl flex items-center justify-center pb-5">Polenta with
                            Mushrooms</strong>
                        <p className='text-xl flex items-center justify-center overflow-hidden max-w-80 mx-auto'>Creamy
                            polenta served with sautéed
                            mushrooms and a drizzle of olive oil or truffle oil.

                        </p>

                    </div>
                    </div>
                    <div className="transition duration-300 lg:hover:scale-110">
                    <div className="flex flex-col items-center">
                        <img src={"./src/assets/images/menuimages/Frittelledizucchine.png"} alt="Yummy food"
                             className="mx-auto pt-5 pb-5 px-20"/>
                    </div>
                    <div className="px-10">
                        <strong className="text-2xl w-full flex items-center justify-center pb-5">Frittelle di
                            Zucchine</strong>

                        <p className='text-xl pb-20 flex items-center justify-center overflow-hidden max-w-80 mx-auto'>Zucchini
                            fritters made from grated
                            zucchini, flour, eggs, and Parmesan, then fried to golden perfection.

                        </p>

                    </div>
                    </div>


                </div>
                <div className="columns-2 min-[300px]:max-lg:hidden">
                    <div className="transition duration-300 lg:hover:scale-110">
                    <div className="flex flex-col items-center">
                        <img src={"./src/assets/images/menuimages/panzanella.png"} alt="Yummy food"
                             className="mx-auto pt-5 pb-5 min-[300px]:max-lg:px-10 lg:px-20"/>
                    </div>

                    <div className="px-10">
                        <strong
                            className="text-2xl flex items-center justify-center min-[300px]:max-lg:pb-20 lg:pb-5">Panzanella</strong>

                        <p className='text-xl flex items-center justify-center overflow-hidden max-w-80 mx-auto pb-20 min-[300px]:max-lg:hidden'>Tuscan
                            bread salad made with cubes of
                            stale bread, tomatoes, cucumbers, red onions, and fresh basil, dressed with olive oil and
                            vinegar.

                        </p>

                    </div>
                    </div>
                    <div className="transition duration-300 lg:hover:scale-110">
                    <div className="flex flex-col items-center">
                        <img src={"./src/assets/images/menuimages/funghirissoto.png"} alt="Yummy food"
                             className="mx-auto pt-5 pb-5 min-[300px]:max-lg:px-10 min-[300px]:max-lg:20"/>
                    </div>
                    <div className="px-10">
                        <strong
                            className="text-2xl w-full flex items-center justify-center min-[300px]:max-lg:pb-20 lg:pb-5">Polenta
                            with
                            Gorgonzola</strong>

                        <p className='text-xl flex items-center justify-center overflow-hidden max-w-80 mx-auto pb-20 min-[300px]:max-lg:hidden'>Soft,
                            creamy polenta served with a
                            rich Gorgonzola cheese sauce.</p>

                    </div>
                    </div>
                </div>



                <div className="columns-2 lg:hidden">
                    <div className="flex flex-col items-center">
                        <img src={"./src/assets/images/menuimages/pestognocchi.png"} alt="Yummy food"
                             className="mx-auto pt-5 pb-5 px-10"/>
                    </div>

                    <div className="px-10">
                        <strong className="text-2xl flex items-center justify-center pb-20">Gnocchi al Pesto</strong>


                    </div>
                    <div className="flex flex-col items-center">
                        <img src={"./src/assets/images/menuimages/arancini.png"} alt="Yummy food"
                             className="mx-auto pt-5 pb-5 px-10"/>
                    </div>

                    <div className="px-10">
                        <strong className="text-2xl flex items-center justify-center pb-20">Arancini</strong>

                    </div>




                </div>
                <div className="columns-2 lg:hidden">
                    {/*bottom row no pb*/}
                    <div>
                        <div className="flex flex-col items-center">
                            <img src={"./src/assets/images/menuimages/raviolizucca.png"} alt="Yummy food"
                                 className="mx-auto pt-5 pb-5 px-10"/>
                        </div>

                        <div className="px-10">
                            <strong className="text-2xl flex items-center justify-center pb-20">Ravioli di Zucca
                            </strong>

                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src={"./src/assets/images/menuimages/Fagottini-di-verdure.png"} alt="Yummy food"
                             className="mx-auto pt-5 pb-5 px-10"/>
                    </div>
                    <div className="px-10">
                        <strong className="text-2xl w-full flex items-center justify-center pb-20">Fagottini di
                            Verdure</strong>

                    </div>


                </div>
                <div className="columns-2 lg:hidden">
                    <div className="flex flex-col items-center">
                        <img src={"./src/assets/images/menuimages/mushroompolenta.png"} alt="Yummy food"
                             className="mx-auto pt-5 pb-5 px-10"/>
                    </div>

                    <div className="px-10">
                        <strong className="text-2xl flex items-center justify-center pb-20">Polenta with
                            Mushrooms</strong>

                    </div>
                    <div className="flex flex-col items-center">
                        <img src={"./src/assets/images/menuimages/Frittelledizucchine.png"} alt="Yummy food"
                             className="mx-auto pt-5 pb-5 px-10"/>
                    </div>
                    <div className="px-10">
                        <strong className="text-2xl w-full flex items-center justify-center pb-20">Frittelle di
                            Zucchine</strong>


                    </div>
                </div>
                <div className="columns-2 lg:hidden">
                    <div className="flex flex-col items-center">
                        <img src={"./src/assets/images/menuimages/panzanella.png"} alt="Yummy food"
                             className="mx-auto pt-5 pb-5 min-[300px]:max-lg:px-10 lg:px-20"/>
                    </div>

                    <div className="px-10">
                        <strong
                            className="text-2xl flex items-center justify-center min-[300px]:max-lg:pb-20 lg:pb-5">Panzanella</strong>

                        <p className='text-xl flex items-center justify-center overflow-hidden max-w-80 mx-auto pb-20 min-[300px]:max-lg:hidden'>Tuscan
                            bread salad made with cubes of
                            stale bread, tomatoes, cucumbers, red onions, and fresh basil, dressed with olive oil and
                            vinegar.

                        </p>

                    </div>

                    <div className="flex flex-col items-center">
                        <img src={"./src/assets/images/menuimages/funghirissoto.png"} alt="Yummy food"
                             className="mx-auto pt-5 pb-5 min-[300px]:max-lg:px-10 min-[300px]:max-lg:20"/>
                    </div>
                    <div className="px-10">
                        <strong
                            className="text-2xl w-full flex items-center justify-center min-[300px]:max-lg:pb-20 lg:pb-5">Polenta
                            with
                            Gorgonzola</strong>

                        <p className='text-xl flex items-center justify-center overflow-hidden max-w-80 mx-auto pb-20 min-[300px]:max-lg:hidden'>Soft,
                            creamy polenta served with a
                            rich Gorgonzola cheese sauce.</p>

                    </div>
                </div>

                <strong
                    className="font-playfair underline sticky top-0 flex pt-20 pb-10 z-10 items-center justify-center text-3xl backdrop-blur-lg max-w-80 mx-auto">Entrees</strong>

                <div className="columns-3 min-[300px]:max-lg:hidden">
                    <div className="transition duration-300 lg:hover:scale-110">
                        <div className="flex flex-col items-center">
                            <img src={"./src/assets/images/menuimages/milaneserissoto.png"} alt="Yummy food"
                                 className="mx-auto pt-5 pb-5 px-20"/>
                        </div>
                        <div className="px-10">
                            <strong className="text-2xl w-full flex items-center justify-center pb-5">Risotto alla
                                Milanese</strong>

                            <p className='text-xl pb-20 flex items-center justify-center overflow-hidden max-w-80 mx-auto'>A
                                creamy risotto flavored with
                                saffron for a rich, golden color and unique taste.
                            </p>

                        </div>
                    </div>
                    <div className="transition duration-300 lg:hover:scale-110">
                        <div className="flex flex-col items-center">
                            <img src={"./src/assets/images/menuimages/lasagna.png"} alt="Yummy food"
                                 className="mx-auto pt-5 pb-5 px-20"/>
                        </div>

                        <div className="px-10">
                            <strong className="text-2xl w-full flex items-center justify-center pb-5">Lasagna
                                Vegetariana</strong>

                            <p className='text-xl pb-20 flex items-center justify-center overflow-hidden max-w-80 mx-auto'>A
                                meatless lasagna made with
                                layers of pasta, ricotta cheese, spinach, and marinara sauce.
                            </p>

                        </div>
                    </div>

                    <div className="transition duration-300 lg:hover:scale-110">
                        <div className="flex flex-col items-center">
                            <img src={"./src/assets/images/menuimages/caponata.png"} alt="Yummy food"
                                 className="mx-auto pt-5 pb-5 px-20"/>
                        </div>

                        <div className="px-10 item">
                            <strong className="text-2xl flex items-center justify-center pb-5">Caponata</strong>

                            <p className='text-xl pb-20 flex items-center justify-center overflow-hidden max-w-80 mx-auto'>A
                                Sicilian eggplant dish
                                cooked with tomatoes, olives, capers, and vinegar, served as a sweet-and-sour side
                                or
                                appetizer.

                            </p>

                        </div>
                    </div>
                </div>
                <div className="columns-2 min-[300px]:max-lg:hidden">
                    {/*bottom row no pb*/}
                    <div className="transition duration-300 lg:hover:scale-110">
                        <div className="flex flex-col items-center">
                            <img src={"./src/assets/images/menuimages/gorgonzolapolenta.png"} alt="Yummy food"
                                 className="mx-auto pt-5 pb-5 min-[300px]:max-lg:px-10 lg:px-20"/>
                        </div>


                        <div className="px-10">
                            <strong
                                className="text-2xl w-full flex items-center justify-center min-[300px]:max-lg:pb-20 lg:pb-5">Risotto
                                ai
                                Funghi</strong>

                            <p className='text-xl flex items-center justify-center overflow-hidden max-w-80 mx-auto pb-20 min-[300px]:max-lg:hidden'>A
                                creamy risotto made with wild
                                mushrooms and flavored with garlic, thyme, and Parmesan cheese.

                            </p>

                        </div>
                    </div>

                    <div className="transition duration-300 lg:hover:scale-110">
                        <div className="flex flex-col items-center">
                            <img src={"./src/assets/images/menuimages/finocchisalad.png"} alt="Yummy food"
                                 className="mx-auto pt-5 pb-5 min-[300px]:max-lg:px-10 lg:px-20"/>
                        </div>
                        <div className="px-10 item">
                            <strong
                                className="text-2xl flex items-center justify-center min-[300px]:max-lg:pb-20 lg:pb-5">Insalata
                                di Finocchi
                            </strong>

                            <p className='text-xl flex items-center justify-center overflow-hidden max-w-80 mx-auto pb-20 min-[300px]:max-lg:hidden'>A
                                refreshing salad made with thinly
                                sliced fennel, oranges, olives, and a light olive oil dressing.

                            </p>

                        </div>
                    </div>

                </div>
                <div className="columns-2 lg:hidden">
                        <div className="flex flex-col items-center">
                            <img src={"./src/assets/images/menuimages/milaneserissoto.png"} alt="Yummy food"
                                 className="mx-auto pt-5 pb-5 px-10"/>
                        </div>
                        <div className="px-10">
                            <strong className="text-2xl w-full flex items-center justify-center pb-20">Risotto alla
                                Milanese</strong>

                        </div>
                        <div className="flex flex-col items-center">
                            <img src={"./src/assets/images/menuimages/lasagna.png"} alt="Yummy food"
                                 className="mx-auto pt-5 pb-5 px-10"/>
                        </div>

                        <div className="px-10">
                            <strong className="text-2xl w-full flex items-center justify-center pb-20">Lasagna
                                Vegetariana</strong>

                        </div>


                    </div>
                    <div className="columns-2 lg:hidden">
                        {/*bottom row no pb*/}
                        <div>
                            <div className="flex flex-col items-center">
                                <img src={"./src/assets/images/menuimages/caponata.png"} alt="Yummy food"
                                     className="mx-auto pt-5 pb-5 px-10"/>
                            </div>

                            <div className="px-10 item">
                                <strong className="text-2xl flex items-center justify-center pb-20">Caponata</strong>


                            </div>
                        </div>

                        <div className="flex flex-col items-center">
                            <img src={"./src/assets/images/menuimages/gorgonzolapolenta.png"} alt="Yummy food"
                                 className="mx-auto pt-5 pb-5 px-10"/>
                        </div>


                        <div className="px-10">
                            <strong
                                className="text-2xl w-full flex items-center justify-center pb-20">Risotto
                                ai
                                Funghi</strong>


                        </div>


                    </div>

                    <div className="lg:hidden">
                        <div className="flex flex-col items-center">
                            <img src={"./src/assets/images/menuimages/finocchisalad.png"} alt="Yummy food"
                                 className="mx-auto pt-5 pb-5 px-20"/>
                        </div>
                        <div className="px-10 item">
                            <strong
                                className="text-2xl flex items-center justify-center pb-20">Insalata
                                di Finocchi
                            </strong>

                            <p className='text-xl flex items-center justify-center overflow-hidden max-w-80 mx-auto pb-20 min-[300px]:max-lg:hidden'>A
                                refreshing salad made with thinly
                                sliced fennel, oranges, olives, and a light olive oil dressing.

                            </p>

                        </div>
                    </div>
                    <strong
                        className="font-playfair underline sticky top-0 flex pt-20 pb-10 z-10 items-center justify-center text-3xl backdrop-blur-lg max-w-80 mx-auto">Desserts</strong>

                <div className="columns-3 min-[300px]:max-lg:hidden">
                    <div className="transition duration-300 lg:hover:scale-110">
                        <div className="flex flex-col items-center">
                            <img src={"./src/assets/images/menuimages/strawberrydesert.png"} alt="Yummy food"
                                 className="mx-auto pt-5 pb-5 px-20"/>
                        </div>
                        <div className="px-10">
                            <strong className="text-2xl w-full flex items-center justify-center pb-5">Strawberry
                                gallete</strong>

                            <p className='text-xl overflow-hidden max-w-80 mx-auto pb-20 '>A rustic, vegan dessert
                                featuring
                                juicy strawberries wrapped in a flaky, golden crust.</p>

                        </div>
                    </div>
                    <div className="transition duration-300 lg:hover:scale-110">
                        <div className="flex flex-col items-center">
                            <img src={"./src/assets/images/menuimages/chocolatedesert.png"} alt="Yummy food"
                                 className="mx-auto pt-5 pb-5 px-20"/>
                        </div>

                        <div className="px-10">
                            <strong className="text-2xl w-full flex items-center justify-center pb-5">Chocolate
                                Truffles</strong>

                            <p className='text-xl overflow-hidden max-w-80 mx-auto pb-20'>Rich, velvety chocolate
                                truffles
                                made from plant-based ingredients.

                            </p>

                        </div>
                    </div>

                    <div className="transition duration-300 lg:hover:scale-110">
                        <div className="flex flex-col items-center">
                            <img src={"./src/assets/images/menuimages/vanilladesert.png"} alt="Yummy food"
                                 className="mx-auto pt-5 pb-5 px-20"/>
                        </div>
                        <div className="px-10 item">
                            <strong className="text-2xl flex items-center justify-center pb-5">Vanilla
                                pudding </strong>

                            <p className='text-xl overflow-hidden max-w-80 mx-auto pb-20'>A creamy, plant-based
                                vanilla
                                pudding with a smooth, luscious texture and a hint of natural vanilla flavor.

                            </p>

                        </div>
                    </div>
                </div>

                <div className="columns-2 lg:hidden">
                        <div className="flex flex-col items-center">
                            <img src={"./src/assets/images/menuimages/strawberrydesert.png"} alt="Yummy food"
                                 className="mx-auto pt-5 pb-5 px-10"/>
                        </div>
                        <div className="px-10">
                            <strong className="text-2xl w-full flex items-center justify-center pb-5">Strawberry
                                gallete</strong>


                        </div>
                        <div className="flex flex-col items-center">
                            <img src={"./src/assets/images/menuimages/chocolatedesert.png"} alt="Yummy food"
                                 className="mx-auto pt-5 pb-5 px-10"/>
                        </div>

                        <div className="px-10">
                            <strong className="text-2xl w-full flex items-center justify-center pb-5">Chocolate
                                Truffles</strong>

                        </div>


                    </div>
                    <div className="lg:hidden">
                        <div className="flex flex-col items-center">
                            <img src={"./src/assets/images/menuimages/vanilladesert.png"} alt="Yummy food"
                                 className="mx-auto pt-5 pb-5 px-20"/>
                        </div>
                        <div className="px-10 item">
                            <strong className="text-2xl flex items-center justify-center pb-20">Vanilla
                                pudding </strong>


                        </div>
                    </div>
                    <Footer/>
                </div>
            </>
            );
            };
            export default Menu;