import {useContext, useEffect, useState} from "react";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import reservationGif from "../assets/gifs/Careers.gif"
import axios from "axios";
import Context from "../Utils/Context.tsx";

const Reservations = () => {
    useEffect(() => {
        document.title = "Reservations";
    }, []);
    const {csrfToken} = useContext(Context);
    const [apiResponse, setApiResponse] = useState("");

    const [reservationData, setReservationData] = useState<{[key: string]: any}>(() => {
        if (localStorage.getItem("reservationData")) {
            return JSON.parse(localStorage.getItem("reservationData")!);
        } else {
            return {
                "first_name": "",
                "last_name": "",
                "email": "",
                "reservation_date": "",
                "reservation_time": "",
                "party_size": 0
            };
        }
    })

    useEffect(() => {
        localStorage.setItem("reservationData", JSON.stringify(reservationData));
    }, [reservationData]);

    const updateReservationData = (event: any) => {
        let newReservationData = {...reservationData}
        newReservationData[event.target.id] = event.target.value;

        setReservationData(newReservationData);
    }

    const placeReservation = async (event: any) => {
        event.preventDefault();
        try {
            const response = await axios({
                method: "POST",
                url: "/api/placereservation/",
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRFToken": csrfToken,
                },
                data: {
                    "name": reservationData!["first_name"] + " " + reservationData!["last_name"],
                    "email": reservationData!["email"],
                    "partySize": reservationData!["party_size"],
                    "reservationDateTime": reservationData["reservation_date"] + " " + reservationData["reservation_time"],
                }
            })

            if (response.status === 200) {
                setApiResponse("Reservation places successfully");
                localStorage.removeItem("reservationData");
                setReservationData({"first_name": "",
                    "last_name": "",
                    "email": "",
                    "reservation_date": "",
                    "reservation_time": "",
                    "party_size": 0})
            }
        } catch (error: any) {
            let errorMessage = "";
            for (const specificError of Object.values(error.response.data.error) as string[]) {
                errorMessage += specificError[0] + "\n"
            }
            setApiResponse(errorMessage);
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
                            <form onSubmit={placeReservation}>
                                <div className="grid md:grid-cols-2 md:gap-6">
                                    <div className="relative z-0 w-full mb-5 group">
                                        <input
                                            type="text"
                                            id="first_name"
                                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-dcharcoal appearance-none outline-none   peer"
                                            placeholder=" "
                                            required
                                            onChange={(event) => updateReservationData(event)}
                                            value={reservationData["first_name"]}
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
                                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-dcharcoal appearance-none outline-none   peer"
                                            placeholder=" "
                                            required
                                            onChange={(event) => updateReservationData(event)}
                                            value={reservationData["last_name"]}
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
                                        id="email"
                                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-dcharcoal appearance-none outline-none   peer"
                                        placeholder=" "
                                        required
                                        onChange={(event) => updateReservationData(event)}
                                        value={reservationData["email"]}
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
                                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-dcharcoal appearance-none outline-none   peer"
                                            required
                                            onChange={(event) => updateReservationData(event)}
                                            value={reservationData["reservation_date"]}
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
                                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-dcharcoal appearance-none outline-none   peer"
                                            required
                                            onChange={(event) => updateReservationData(event)}
                                            value={reservationData["reservation_time"]}
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
                                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-dcharcoal appearance-none outline-none  peer"
                                        placeholder=" "
                                        required
                                        min="1"
                                        onChange={(event) => updateReservationData(event)}
                                        value={reservationData["party_size"]}
                                    />
                                    <label
                                        htmlFor="party_size"
                                        className="peer-focus:font-medium absolute text-sm text-brown-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-brown-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                        Party Size
                                    </label>
                                </div>
                                <div className="flex flex-col justify-center mt-6">
                                    <button
                                        type="submit"
                                        className={`hover:shadow-xl outline-none  font-medium rounded-lg text-sm w-fit sm:w-auto px-5 py-2.5 transition duration-100`}>
                                        Reserve Table
                                    </button>
                                    <h1 className="font-lato text-md mt-2">{apiResponse}</h1>
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
