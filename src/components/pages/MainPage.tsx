import React, {useEffect, useState} from 'react';
import Sidebar from "../Sidebar";
import Content from "../Content";
import {WeatherData} from "../../types/WeatherType";
import axios from "axios";
import Spinner from "../Spinner";

const MainPage = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true)

    const [weather, setWeather] = useState<WeatherData>()
    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            axios.get('https://api.api-ninjas.com/v1/weather?lat=' + position.coords.latitude + "&lon="+position.coords.longitude, {headers: {'X-Api-Key': "kTsJYXwEkCmuRBsag4jeNA==Rb0EZRnfo6WOS78y"}}).then(res => {
                console.log("data", res.data)
                setWeather(res.data)
                setIsLoading(false)
            }).catch(e => console.log(e))
        })

    }, [])
    if (isLoading)
        return <div className={"h-screen"}>
            <Spinner/>
        </div>
    return (
        <div className={"container"}>
            <Sidebar weather={weather}/>
            <Content weather={weather}/>
        </div>
    );
};

export default MainPage;