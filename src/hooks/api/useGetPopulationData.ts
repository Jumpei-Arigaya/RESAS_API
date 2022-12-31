import axios from "axios"
import { useState } from "react";

export const useGetPopulationData = () => {
    const API_PREFECTURES_URL: string = 'https://opendata.resas-portal.go.jp/api/v1/prefectures'
    const [prefecureName, setPrefectureName] = useState();
    const getPopulationData = () => {
        axios.get(API_PREFECTURES_URL)
            .then((res) => setPrefectureName(res.data))
    }
    return { getPopulationData, prefecureName }
}