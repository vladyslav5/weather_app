import React, {useEffect, useState} from 'react';
import Sidebar from "../Sidebar";
import Content from "../Content";
import {useParams} from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";
import {WeatherData} from "../../types/WeatherType";



const CityPage = () => {
    const {city} = useParams()
    const [cityName, countryName] = city ? city?.split("_")?.join(" ")?.split("&") : [];
    const [weather, setWeather] = useState<WeatherData>()
    const [isLoading, setIsLoading] = useState<boolean>(true)
    useEffect(() => {
        setIsLoading(true)
        const getData = async () => {
            if (!cityName || !countryName) throw new Error("url not right")
            else {
                await axios.get('https://api.api-ninjas.com/v1/weather?city=' + cityName, {headers: {'X-Api-Key': "kTsJYXwEkCmuRBsag4jeNA==Rb0EZRnfo6WOS78y"}}).then(res => {
                    console.log("data", res.data)
                    setWeather(res.data)
                    setIsLoading(false)
                }).catch(e => console.log(e))
            }
        }
        getData().catch(console.error)
    }, [city])
    if (isLoading)
        return <div className={"h-screen"}>
            <Spinner/>
        </div>
    return (
        <div className={"container"}>
            <Sidebar city={cityName} country={countryName} weather={weather}/>
            <Content weather={weather }/>
        </div>
    );
};

export default CityPage;