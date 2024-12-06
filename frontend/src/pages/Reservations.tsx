import {useEffect, useState} from "react";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
// import reservationGif from "../assets/gifs/reservations.gif";
import reservationGif from "../assets/gifs/Careers.gif"
import axios from "axios";

const Reservations = () => {
    useEffect(() => {
        document.title = "Reservations";
    }, []);

    const [reservationData, setReservationData] = useState<{[key: string]: any}>()

    const updateReservationData = (event) => {
        let newReservationData = {...reservationData}
        newReservationData[event.target.id] = event.target.value;

        setReservationData(newReservationData);
    }

    const placeReservation = async (event) => {
        try {
            const response = await axios({
                method: "POST",
                url: "/api/reserve/",
                headers: {
                    "Content-Type": "application/json",
                },
                data: {
                    "name": reservationData!["first_name"] + " " + reservationData!["last_name"],
                    "email": reservationData!["email"],
                    "party_size": reservationData!["party_size"],
                    "reservation_date": reservationData!["reservation_date"],
                    "reservation_time": reservationData!["reservation_time"],
                }
            })

            console.log(response)
        } catch (error: any) {
            console.log(error)
        }
    }

    return (
        <>
            <Topbar />
            <div className="flex flex-col min-h-screen font-lato">
                <div className="relative flex-grow">
                    <img
                        className="z-0 w-full h-full object-cover"
                        src={reservationGif}
                        alt="Background"
                    />
                    <div
                        className="absolute inset-0 flex justify-center items-center scale-[1.20]">
                        <div
                            className="max-w-md mx-auto p-6 rounded-lg shadow-lg bg-sbeige">
                            <h2 className={`text-3xl font-playfair text-center mb-8`}>
                                Reservations
                            </h2>
                            <form>
                                <div className="grid md:grid-cols-2 md:gap-6">
                                    <div className="relative z-0 w-full mb-5 group">
                                        <input
                                            type="text"
                                            id="first_name"
                                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-dcharcoal appearance-none focus:outline-none focus:ring-0  peer"
                                            placeholder=" "
                                            required
                                            onChange={(event) => updateReservationData(event)}
                                        />
                                        <label
                                            htmlFor="first_name"
                                            className="peer-focus:font-medium absolute text-sm text-brown-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-brown-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                            First Name
                                        </label>
                                    </div>
                                    <div className="relative z-0 w-full mb-5 group">
                                        <input
                                            type="text"
                                            id="last_name"
                                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-dcharcoal appearance-none focus:outline-none focus:ring-0  peer"
                                            placeholder=" "
                                            required
                                            onChange={(event) => updateReservationData(event)}
                                        />
                                        <label
                                            htmlFor="last_name"
                                            className="peer-focus:font-medium absolute text-sm text-brown-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-brown-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                            Last Name
                                        </label>
                                    </div>
                                </div>
                                <div className="relative z-0 w-full mb-5 group">
                                    <input
                                        type="email"
                                        id="email_address"
                                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-dcharcoal appearance-none focus:outline-none focus:ring-0  peer"
                                        placeholder=" "
                                        required
                                        onChange={(event) => updateReservationData(event)}
                                    />
                                    <label
                                        htmlFor="email_address"
                                        className="peer-focus:font-medium absolute text-sm text-brown-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-brown-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                        Email Address
                                    </label>
                                </div>
                                <div className="grid md:grid-cols-2 md:gap-6">
                                    <div className="relative z-0 w-full mb-5 group">
                                        <input
                                            type="date"
                                            id="reservation_date"
                                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-dcharcoal appearance-none focus:outline-none focus:ring-0  peer"
                                            required
                                            onChange={(event) => updateReservationData(event)}
                                        />
                                        <label
                                            htmlFor="reservation_date"
                                            className="peer-focus:font-medium absolute text-sm text-brown-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-brown-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                            Reservation Date
                                        </label>
                                    </div>
                                    <div className="relative z-0 w-full mb-5 group">
                                        <input
                                            type="time"
                                            id="reservation_time"
                                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-dcharcoal appearance-none focus:outline-none focus:ring-0  peer"
                                            required
                                            onChange={(event) => updateReservationData(event)}
                                        />
                                        <label
                                            htmlFor="reservation_time"
                                            className="peer-focus:font-medium absolute text-sm text-brown-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-brown-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                            Reservation Time
                                        </label>
                                    </div>
                                </div>
                                <div className="relative z-0 w-full mb-5 group">
                                    <input
                                        type="number"
                                        id="party_size"
                                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-dcharcoal appearance-none focus:outline-none focus:ring-0  peer"
                                        placeholder=" "
                                        required
                                        min="1"
                                        onChange={(event) => updateReservationData(event)}
                                    />
                                    <label
                                        htmlFor="party_size"
                                        className="peer-focus:font-medium absolute text-sm text-brown-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-brown-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                        Party Size
                                    </label>
                                </div>
                                <div className="flex justify-center mt-6">
                                    <button
                                        type="submit"
                                        className={`hover:shadow-xl focus:ring-4 focus:outline-none focus:ring-brown-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 transition duration-100`}>
                                        Reserve Table
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Reservations;
