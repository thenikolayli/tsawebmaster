import {createContext, useEffect, useState} from "react";
import axios from "axios";

const ContextData = createContext(null);

export default ContextData

const ContextProvider = ({children}: {children: any}) => {
    const [csrfToken, setCsrfToken] = useState(null);

    useEffect(() => {
        const getToken = async () => {
            const response = await axios({
                "method": "GET",
                "url": "/api/gettoken/",
            })

            setCsrfToken(response.data.token)
        }

        getToken().catch()
    }, []);

    let contextData = {
        csrfToken: csrfToken,
    }

    // @ts-ignore
    return (
        <ContextData.Provider value={contextData} >
            {children}
        </ContextData.Provider>
    )
}

export {ContextProvider}