import React, {FC, useEffect, useState} from 'react';
import Search from "./Search/Search";
import {WeatherData} from "../types/WeatherType";
import {WeatherIcons} from "../utils/icons";


interface sideBarProps {
    city?: string
    country?: string,
    weather?: WeatherData
}

const Sidebar: FC<sideBarProps> = ({city, country, weather}) => {
    const [icon, setIcon] = useState()
    const [time, setTime] = useState(new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
    }));
    useEffect(() => {
        const hours = new Date().getHours()
        const isDayTime = hours > 6 && hours < 20
        console.log(WeatherIcons)
        if (weather && weather?.cloud_pct > 50 && isDayTime) {
            setIcon(WeatherIcons['cloudy-day-1.svg'])
        } else if (weather && weather?.cloud_pct > 50 && !isDayTime) {
            setIcon(WeatherIcons['cloudy-night-1.svg'])
        } else if (weather && weather?.cloud_pct == 100) {
            setIcon(WeatherIcons['cloudy.svg'])
        } else if ((weather && weather?.cloud_pct < 50 && !isDayTime)) {
            setIcon(WeatherIcons['night.svg'])
        } else if ((weather && weather?.cloud_pct < 50 && isDayTime)) {
            setIcon(WeatherIcons['day.svg'])
        }
        setInterval(() => setTime(new Date().toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit'
        })), 60 - new Date().getSeconds())
    }, []);
    const day = new Date().toLocaleString('en-us', {weekday: 'long'})
    return (
        <div className={"w-full xl:w-2/6 pl-5  bg-white flex-col"}>
            <Search/>
            <div className={"justify-center  p-16 pl-6"}>
                <div className={"flex flex-col justify-center items-center"}>
                    <h2 className={"font-semibold"}>Weather</h2>
                </div>
            </div>
            <div className={"text-6xl"}>
                {weather?.temp}<sup>&#176;C</sup>
            </div>
            <div className={"text-4xl"}>
                {(city && country) ? `${city},${country}` : "Your geo position"}
            </div>
            <div className={"flex"}>
                {day},
                <div className={"text-gray-300"}>{time}</div>
            </div>
            <hr/>
            <div className={"flex"}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"/>
                </svg>
                Clouds - {weather?.cloud_pct}%
            </div>
        </div>
    );
};


export default Sidebar;