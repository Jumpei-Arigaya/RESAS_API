import React, { useEffect, useState } from 'react'
import { useGetPopulationData } from '../../hooks/api/useGetPopulationData'

export const InputApiKey = () => {
    const { getPopulationData, prefecureName } = useGetPopulationData();
    const [apiKey] = useState<string>();

    useEffect(() => {
        getPopulationData();
        // eslint-disable-next-line
    }, [])
    console.log(prefecureName)

    return (
        <div>
            <h1>APIキーを入力してください。</h1>
            <div>{apiKey}</div>
            <input type="text"></input>
        </div>
    )
}
