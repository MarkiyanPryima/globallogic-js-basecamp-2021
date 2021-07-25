import React from "react";
import './mainbar.css'
import Infromation from "../information/Infromation";
import Studies from "../studies/studies";
export default class MainBar extends React.Component {
    render() {
        return (
            <div className={'mainbar'}>
                <h1 style={{
                    color: "darkolivegreen",
                    fontSize: '50px',
                }}>Markiyan Pryima</h1>
                <Infromation/>
                <Studies/>
            </div>
        )
    }
}
