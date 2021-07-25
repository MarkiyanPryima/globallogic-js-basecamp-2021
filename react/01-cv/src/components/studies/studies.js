import React from "react";
import './studies.css'

export default class Studies extends React.Component {
    render() {
        return (
            <div className={'studies'}>
               <h3 style={{color: "darkolivegreen"}}>STUDIES AND CERTIFICATES</h3>
                <br/>
                <h4>Bachelor of Data science</h4>
                <span>Ivan Franko National University</span>
                <br/> <br/> <br/>
                <h4>JavaScript Fundamentals</h4>
                <span>SoftServe IT academy</span>
                <br/> <br/> <br/>
                <h4>GL Full-Stack base-camp</h4>
                <span>GlobalLogic Education</span>
            </div>
        )
    }
}
