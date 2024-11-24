import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {clsx} from "clsx";
import {faBasketShopping, faClock, faDollarSign, faMinus, faPlus} from "@fortawesome/free-solid-svg-icons";

interface args {
    item: string;
    amount: number;
    description: string;
    imageSource: string;
    changeItem: (title: string, operation: string) => void;
    price: number;
    time: number;
}

const MenuItemCard = ({item, amount, description, imageSource, changeItem, price, time}: args) => (
    <div
        className="relative overflow-hidden rounded-lg shadow-lg px-2 pb-2 pt-1 border-t-sbeige border-t-2">
        <div className="static z-0 flex justify-between">
            <h1 className="text-2xl font-lato">{item}</h1>
            <div className="flex">
                <FontAwesomeIcon
                    className={clsx("size-4 mr-1 mt-1", {"hidden": !(amount > 0)})}
                    icon={faBasketShopping}/>
                <h1 className="text-2xl font-lato text-end">{amount}</h1>
            </div>
        </div>

        <img className="static z-0" src={imageSource} alt={item[0]}/>
        <h1 className="static z-0 text-lg font-lato">{description}</h1>
        <h1 className="static z-0 text-md font-lato font-bold">
            <FontAwesomeIcon icon={faDollarSign}/>{price}
            <FontAwesomeIcon className="ml-2" icon={faClock}/> {time} mins
        </h1>

        <div className="absolute z-10 top-0 left-0 w-full h-full">
            <button
                className={clsx("opacity-0 hover:opacity-100 transition duration-100 w-full h-full bg-black/30 flex justify-center items-center", {
                    "hidden": amount >= 1
                })} onClick={() => changeItem(item, "add")}>
                <FontAwesomeIcon
                    className="absolute size-10 text-white rounded-full bg-black/50 p-2"
                    icon={faPlus}/>
            </button>
            <div
                className={clsx("opacity-0 hover:opacity-100 transition duration-100 w-full h-full bg-black/30 flex flex-col justify-center", {
                    "hidden": amount < 1
                })}>
                <button
                    className="w-full h-1/2 border-b-2 border-sbeige/50 flex justify-center items-center"
                    onClick={() => changeItem(item, "add")}>
                    <FontAwesomeIcon
                        className="absolute size-10 text-white rounded-full bg-black/50 p-2"
                        icon={faPlus}/>
                </button>
                <button
                    className="w-full h-1/2 border-b-2 border-sbeige/50 flex justify-center items-center"
                    onClick={() => changeItem(item, "subtract")}>
                    <FontAwesomeIcon
                        className="absolute size-10 text-white rounded-full bg-black/50 p-2"
                        icon={faMinus}/>
                </button>
            </div>
        </div>
    </div>
)

export default MenuItemCard