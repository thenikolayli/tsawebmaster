import {createContext, useEffect, useState} from "react";
import axios from "axios";

const ContextData = createContext(null);

export default ContextData

const ContextProvider = ({children}) => {
    const [csrfToken, setCsrfToken] = useState();

    useEffect(() => {
        const getToken = async () => {
            const response = await axios({
                "method": "GET",
                "url": "api/gettoken/",
            })

            setCsrfToken(response.data.token)
        }

        getToken()
    }, []);

    let contextData = {
        csrfToken: csrfToken,
    }

    return (
        <ContextData.Provider value={contextData} >
            {children}
        </ContextData.Provider>
    )
}

export {ContextProvider}