import React from "react";
import './Skills.css'

export default class Skills extends React.Component {
    skills = ['Java Script', 'Node js', 'React', 'HTML / CSS', 'GIT', 'Algorithms', 'C++'];

    render() {
        return (
            <div className={'skills'}>
                <h2>SKILLS</h2>
                <br/>
                <ul>
                    {this.skills.map(skill => <li>{skill}</li>)}
                </ul>
                <br/>
                <span>______________________________________</span>
            </div>
        )
    }
}
