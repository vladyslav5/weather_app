import * as React from 'react'
import App from "./components/App";
import {createRoot} from "react-dom/client";
import './style.css';

const root = createRoot(
    document.getElementById('root') as HTMLElement
)
root.render(
    <App/>
)