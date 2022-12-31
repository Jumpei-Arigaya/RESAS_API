import React, { useEffect, useState } from 'react'
import { useGetPopulationData } from '../../hooks/api/useGetPopulationData'

export const InputApiKey = () => {
    const { getPopulationData, prefecureName } = useGetPopulationData();
    const [apiKey, setApiKey] = useState<string>();

    useEffect(() => {
        getPopulationData();
    }, [])
    console.log(prefecureName)

    return (
        <div>
            <div>{apiKey}</div>
            <input type="text" onChange={(e: string) => setApiKey(e)}></input>
        </div>
    )
}
