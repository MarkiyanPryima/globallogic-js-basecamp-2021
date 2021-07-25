import React from "react";
import './sidebar.css'
import Img from "../img/img";
import Personal from "../personal/Personal";
import Skills from "../skills/Skills";
import Languages from "../languages/Languages";
import Interests from "../interests/Interests";

export default class SideBar extends React.Component {
    render() {
        return (
            <div className={'sidebar'}>
                <Img/>
                <Personal/>
                <Skills/>
                <Languages/>
                <Interests/>
            </div>
        )
    }
}