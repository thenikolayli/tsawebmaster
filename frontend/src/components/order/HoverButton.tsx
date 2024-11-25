import {clsx} from "clsx";

interface args {
    updateOrder: (event: any, key: string, change?: any) => void;
    value: string;
    valueMatch: string;
    name: string;
}

const HoverButton = ({updateOrder, value, valueMatch, name}: args) => (
    <button onClick={() => updateOrder(null, "orderType", "delivery")}
            className={clsx("text-xl font-playfair transition duration-300", {
                "text-wolive hover:text-bcitrus": value !== valueMatch,
                "text-bcitrus": value === valueMatch,
            })}>{name}
    </button>
)

export default HoverButton