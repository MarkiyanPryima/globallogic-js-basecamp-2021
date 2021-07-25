import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SideBar from "./components/sidebar/sidebar";
import MainBar from "./components/mainbar/mainbar";

ReactDOM.render(
    <React.StrictMode>
        <SideBar />
        <MainBar/>
    </React.StrictMode>,
    document.getElementById('root')
);

