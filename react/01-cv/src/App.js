import Sidebar from "./components/Sidebar/Sidebar";
import Mainbar from "./components/Mainbar/Mainbar";
import './index.css'
import React from "react";

function App() {
    return (
        <div className={'mainBlock'}>
            <Sidebar/>
            <Mainbar/>
        </div>
    )
}

export default App;
