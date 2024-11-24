import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDollarSign, faEquals, faPercent, faPlus} from "@fortawesome/free-solid-svg-icons";
import {clsx} from "clsx";

interface args {
    total: number;
    tipValue: number;
    tipType: string;
    tipInput: number;
    updateOrder: (event: any, key: string, change?: any) => void;
}

const CostDisplay = ({total, tipValue, tipType, tipInput, updateOrder}: args) => (
    <div
        className="group grid grid-cols-1 mt-2 border-wolive border-2 w-fit rounded-lg">
        <div className="col flex items-center border-b-2 border-wolive">
            <FontAwesomeIcon className="text-wolive mx-2" icon={faEquals}/>
            <h1 className="text-wolive text-xl">{total - tipValue}</h1>
        </div>
        <div className="col border-b-2 border-wolive flex items-center">
            <FontAwesomeIcon icon={faPlus}
                             className="text-wolive font-lato mx-2"/>
            <input type="number"
                   className={clsx("bg-transparent w-20 outline-none hover:opacity-65 transitino duration-300 font-lato text-xl", {
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
            <FontAwesomeIcon className="text-wolive mx-2" icon={faEquals}/>
            <h1 className="text-wolive text-xl">{total}</h1>
        </div>
    </div>
)

export default CostDisplay