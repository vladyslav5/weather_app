import {ReactNode} from "react";
import {Route} from "react-router-dom";
import {CITY_ROUTE, MAIN_ROUTE} from "./utils/consts";
import MainPage from "./components/pages/MainPage";
import CityPage from "./components/pages/CityPage";
import React from "react"

interface Route {
    path: string
    element: ReactNode
}

export const routes: Route[] = [
    {
        path: MAIN_ROUTE,
        element: <MainPage/>
    },
    {
        path: CITY_ROUTE + "/:city/",
        element: <CityPage/>
    }
]