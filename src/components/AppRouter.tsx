import React from 'react';
import {Route, Routes, Navigate} from "react-router-dom"
import {routes} from "../routes";
import {MAIN_ROUTE} from "../utils/consts";

const AppRouter = () => {
    return (
        <Routes>
            {
                routes.map(r => <Route key={r.path} {...r}/>)
            }
            <Route path={"*"} element={<Navigate to={MAIN_ROUTE}/>}/>
        </Routes>
    );
};

export default AppRouter;