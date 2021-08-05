import React from "react";
import './Mainbar.css'
import Infromation from "../Information/Infromation";
import Studies from "../Studies/Studies";

export default class Mainbar extends React.Component {
    render() {
        return (
            <div className={'mainbar'}>
                <h1>Markiyan Pryima</h1>
                <Infromation/>
                <Studies/>
            </div>
        )
    }
}
