import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {clsx} from "clsx";
import {faDollarSign, faBasketShopping} from "@fortawesome/free-solid-svg-icons";
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import Topbar from "../components/Topbar.tsx";
import Footer from "../components/Footer.tsx";
import MenuItemCard from "../components/order/MenuItemCard.tsx";
import CostDisplay from "../components/order/CostDisplay.tsx";
const images = import.meta.glob("../assets/images/menuImages/*.{png, webp, jpeg}")
import Context from "../Utils/Context.tsx";

const Order = () => {
    const [imageSources, setImageSources] = useState<string[]>([])
    const [orderData, setOrderData] = useState<{[key: string]: any}>(() => {
        if (localStorage.getItem("orderData") !== null) {
            return JSON.parse(localStorage.getItem("orderData")!)
        } else {
            return {
                "tipInput": 0,
                "tipValue": 0,
                "tipType": "money",
                "total": 0,
                "name": "",
                "email": "",
                "items": {}
            }
        }
    })
    const [imageSources, setImageSources] = useState<string[]>([])
    const {csrfToken} = useContext(Context);
    const [apiResponse, setApiResponse] = useState("")

    const items: { [key: string]: { [key: string]: any } } = {
        "item 1": {
            "category": "appetizers",
            "price": 10,
            "description": "food",
            "time": 14,
        },
        "item 2": {
            "category": "appetizers",
            "price": 20,
            "description": "food",
            "time": 14,
        },
        "item 3": {
            "category": "appetizers",
            "price": 10,
            "description": "food",
            "time": 14,
        },
        "item 4": {
            "category": "main",
            "price": 20,
            "description": "food",
            "time": 14,
        },
        "item 5": {
            "category": "main",
            "price": 10,
            "description": "food",
            "time": 14,
        },
        "item 6": {
            "category": "main",
            "price": 20,
            "description": "food",
            "time": 14,
        },
        "item 7": {
            "category": "main",
            "price": 10,
            "description": "food",
            "time": 14,
            "key": 6
        },
        "item 8": {
            "category": "desserts",
            "price": 20,
            "description": "food",
            "time": 14,
        },
        "item 9": {
            "category": "desserts",
            "price": 10,
            "description": "food",
            "time": 14,
        },
        "item 10": {
            "category": "desserts",
            "price": 20,
            "description": "food",
            "time": 14,
        },
    }

    const categories = [
        {"title": "Appetizers", "description": "appetizer description"},
        {"title": "Main", "description": "main description"},
        {"title": "Desserts", "description": "desserts description"},
    ]


    useEffect(() => {
        document.title = "Order"

        const loadImages = async () => {
            let newImageSources = []

            for (let image of Object.values(images)) {
                const module: any = await image()
                newImageSources.push(module.default)
            }
            setImageSources(newImageSources)
        }

        loadImages()
    }, [])

    useEffect(() => {
        localStorage.setItem("orderData", JSON.stringify(orderData))
    }, [orderData]);


    const updateOrder = (event: any, key: string, change?: any) => {
        const currentOrder = {...orderData}
        if (key === "items") {
            if (change.operation === "add") {
                currentOrder["items"][change.item] = (currentOrder["items"][change.item] || 0) + 1
            } else if (change.operation === "subtract") {
                currentOrder["items"][change.item] -= 1
            }
            if (currentOrder["items"][change.item] === 0) {
                delete currentOrder["items"][change.item]
            }
        } else if (change !== undefined) {
            currentOrder[key] = change
        } else if (key !== "total") {
            currentOrder[key] = event.target.value
        }

        let total = 0
        let orderTime = 0
        for (const item of Object.entries(currentOrder["items"]) as [string, number][]) {
            total += items[item[0]]["price"] * item[1]
            orderTime += items[item[0]]["time"]
        }

        let tip = 0
        if (currentOrder["tipInput"] === "") {currentOrder["tipValue"] = 0}
        if (currentOrder["tipType"] === "money") {
            tip = parseFloat(currentOrder["tipInput"]) || 0
        } else if (currentOrder["tipType"] === "percent") {
            tip = Math.round(total * (parseFloat(currentOrder["tipInput"]) / 100)) || 0
        }

        currentOrder["total"] = total + tip
        currentOrder["tipValue"] = tip
        currentOrder["orderTime"] = orderTime

        setOrderData(currentOrder)
    }

    const placeOrder = async () => {
        try {
            const response = await axios({
                method: "POST",
                url: "/api/placeorder/",
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRFTOKEN": csrfToken,
                },
                data: {
                    items: orderData["items"],
                    total: orderData["total"],
                    tip: orderData["tipValue"],
                    name: orderData["name"],
                    orderType: orderData["orderType"],
                    orderTime: orderData["orderTime"],
                    email: orderData["email"]
                }
            })
            console.log(response)
            if (response.status === 200) {
                setApiResponse("Order placed successfully!")
            }
        } catch (error: any) {
            let errorMessage = "";
            for (const specificError of Object.values(error.response.data.error) as string[]) {
                errorMessage += specificError[0] + "\n"
            }
            setApiResponse(errorMessage);
        }
    }

    const mapMenuItems = () => {
        return (
            <div className="mt-2 space-y-4">
                {categories.map((category, key) =>
                    <div key={key}>
                        <h1 className="text-4xl font-playfair">{category.title}</h1>
                        <h1 className="text-2xl font-playfair">{category.description}</h1>
                        <div className="grid grid-cols-4 space-evenly gap-6 mt-2">
                            {Object.entries(items).map((item, key2) => {
                                    if (item[1].category === category.title.toLowerCase()) {
                                        return (<MenuItemCard key={key2} item={item[0]} amount={orderData["items"][item[0]]}
                                                              description={item[1].description}
                                                              imageSource={imageSources[key2]} updateOrder={updateOrder}
                                                              price={item[1].price} time={item[1].time}/>)
                                    }
                                }
                            )}
                        </div>
                    </div>
                )}
            </div>
        )
    }

    const mapPickedItems = () => {

        return (
            <>
                <div className="flex mb-2">
                    <h1 className="text-4xl mr-2 font-playfair">Hello</h1>
                    <input
                        className="text-4xl pb-1 text-bcitrus font-playfair bg-transparent outline-none placeholder-wolive hover:opacity-65 transition duration-300"
                        onChange={(event) => updateOrder(event, "name")} type="text" value={orderData["name"]}
                        placeholder="guest"/>
                </div>
                <h1 className="text-2xl font-playfair">Your order includes</h1>
                <table className="table-fixed w-1/4">
                    <tbody>
                        {Object.entries(orderData["items"]).map((item, key) => (
                                <tr key={key}>
                                    <th className="text-lg font-lato w-1/4 text-left"><FontAwesomeIcon icon={faBasketShopping}/> {item[1]}</th>
                                    <th className="text-lg font-lato w-1/3 text-left">{item[0]}</th>
                                    <th className="text-lg font-lato w-1/3 text-left"><FontAwesomeIcon icon={faDollarSign}/>{item[1] * items[item[0]].price}</th>
                                </tr>
                        ))}
                    </tbody>
                </table>
                <CostDisplay total={orderData["total"]} orderTime={orderData["orderTime"]} tipValue={orderData["tipValue"]} tipType={orderData["tipType"]} tipInput={orderData["tipInput"]} updateOrder={updateOrder} />
                <div className="flex mt-2">
                    <h1 className="text-xl font-playfair mr-1">Your order will be</h1>
                    <button onClick={() => updateOrder(null, "orderType", "delivery")}
                            className={clsx("text-xl font-playfair transition duration-300", {
                                "text-wolive hover:text-bcitrus": orderData["orderType"] !== "delivery",
                                "text-bcitrus": orderData["orderType"] === "delivery",
                            })}>Delivered
                    </button>
                    <h1 className="text-xl font-playfair mx-1">/</h1>
                    <button onClick={() => updateOrder(null, "orderType", "pickup")}
                            className={clsx("text-xl font-playfair transition duration-300 mr-2", {
                                "text-wolive hover:text-bcitrus": orderData["orderType"] !== "pickup",
                                "text-bcitrus": orderData["orderType"] === "pickup",
                            })}>Picked up
                    </button>
                </div>
                <div className="flex mt-2">
                <h1 className="text-xl font-playfair mr-1">Your email is</h1>
                    <input type="text" value={orderData["email"]} placeholder={"###"} onChange={(event) => updateOrder(event, "email")} className={clsx("text-xl font-playfair placeholder-wolive hover:opacity-65 transition duration-300 bg-transparent outline-none", {
                        "text-wolive hover:text-bcitrus": orderData["email"] === "",
                        "text-bcitrus": orderData["contact"] !== ""
                    })}/>
                </div>
            </>
        )
    }


    return (
        <>
            <Topbar/>
            <div className="relative bg-sbeige flex justify-center">
                <div className="my-[6rem] bg-dcharcoal/20 p-4 rounded-lg w-full lg:w-2/3">
                    <h1 className="text-6xl font-playfair">Order</h1>
                    {mapMenuItems()}
                    <div className={clsx("mt-8", {"hidden": Object.keys(orderData["items"]).length === 0})}>
                        {mapPickedItems()}
                        <button onClick={placeOrder} className="text-2xl font-playfair mt-2">Place order</button>
                        <h1 className="text-md font-lato mt-2">{apiResponse}</h1>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Order