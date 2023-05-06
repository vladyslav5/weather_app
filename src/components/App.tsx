import * as React from 'react'
import {FC, useEffect, useState} from "react";

const App: FC = () => {
    const [latitude, setLatitude] = useState<number>(0)
    const [longitude, setLongitude] = useState<number>(0)
    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLatitude(position.coords.latitude)
            setLongitude(position.coords.longitude)
        })
    }, [])
    return (
        <div>
            <div className={"p-4"}>longitude - {longitude}</div>
            <div className={"p-4"}>latitude - {latitude}</div>
            <h1 className={"m-10 border border-purple-500 rounded-lg m-8"}>hello world </h1>
            <h1 className={"font-bold"}>hello world </h1>
            <h1>hello world </h1>
            <h1>hello world </h1>
        </div>
    );
};

export default App;