import { useState, useEffect } from 'react'

import { getPais } from "../helpers/getPais"


export const usePais = (pais) => {

    const [country, setCountry] = useState([])

    const getFecthPais = async () => {
        const result = await getPais(pais);
        setCountry(result)
    }

    useEffect(() => {
        getFecthPais();
    }, [])
    return {
        country
    }
}
