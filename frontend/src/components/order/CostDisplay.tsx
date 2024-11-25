import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClock, faDollarSign, faEquals, faPercent, faPlus} from "@fortawesome/free-solid-svg-icons";
import {clsx} from "clsx";

interface args {
    total: number;
    tipValue: number;
    tipType: string;
    tipInput: number;
    orderTime: number;
    updateOrder: (event: any, key: string, change?: any) => void;
}

const CostDisplay = ({total, tipValue, tipType, tipInput, orderTime, updateOrder}: args) => (
    <div
        className="group grid grid-cols-1 mt-2 border-wolive border-2 w-fit rounded-lg">
        <div className="col flex items-center border-b-2 border-wolive">
            <FontAwesomeIcon className="text-wolive ml-2 mr-1" icon={faEquals}/>
            <h1 className="text-wolive text-xl"><FontAwesomeIcon className="size-5" icon={faDollarSign}/>{total - tipValue}</h1>
        </div>
        <div className="col border-b-2 border-wolive flex items-center">
            <FontAwesomeIcon icon={faPlus}
                             className="text-wolive font-lato mx-2"/>
            <input type="number"
                   className={clsx("bg-transparent w-20 outline-none hover:opacity-65 transition duration-300 font-lato text-xl", {
                       "text-bcitrus": tipValue > 0,
                       "text-wolive": tipValue == 0
                   })}
                   value={tipInput}
                   onChange={(event) => updateOrder(event, "tipInput")}
            />
            <button className="border-x-2 border-wolive transition duration-300"
                    onClick={() => updateOrder(null, "tipType", "money")}>
                <FontAwesomeIcon
                    className={clsx("size-4 mx-2 transition duration-300", {
                        "text-bcitrus": tipType === "money",
                        "hover:text-bcitrus text-wolive": tipType !== "money"
                    })}
                    icon={faDollarSign}/></button>
            <button onClick={() => updateOrder(null, "tipType", "percent")}><FontAwesomeIcon
                className={clsx("size-4 mx-2 transition duration-300", {
                    "text-bcitrus": tipType === "percent",
                    "hover:text-bcitrus text-wolive": tipType !== "percent"
                })}
                icon={faPercent}/></button>
        </div>
        <div className="col flex items-center">
            <FontAwesomeIcon className="text-wolive ml-2 mr-1" icon={faEquals}/>
            <h1 className="text-wolive text-xl"><FontAwesomeIcon className="size-5" icon={faDollarSign}/>{total}</h1>
        </div>
        <div className="col flex items-center">
            <FontAwesomeIcon className="text-wolive ml-2 mr-1.5" icon={faClock}/>
            <h1 className="text-wolive text-xl">{orderTime} mins</h1>
        </div>
    </div>
)

export default CostDisplay