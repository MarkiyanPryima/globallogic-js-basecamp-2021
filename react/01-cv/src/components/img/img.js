import React from "react";
import './img.css'
import logo from './logo.png'

export default class Img extends React.Component {
    render () {
        return (
          <img src={logo}/>
        )
    }
}
