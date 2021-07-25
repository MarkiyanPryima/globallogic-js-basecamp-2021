import React from "react";
import './Interests.css'

export default class Interests extends React.Component {
    interests = ['Football', 'Investing', 'Cars', 'Working out'];
    render () {
        return (
        <div className={'interests'}>
            <h2>INTERESTS</h2>
            <br/>
            <ul>
                {this.interests.map(interest => <li>{interest}</li>)}
            </ul>
        </div>
        )
    }
}
