import './Skills.css'

export default function Skills() {
    const skills = ['Java Script', 'Node js', 'React', 'HTML / CSS', 'GIT', 'Algorithms', 'C++'];
    return (
        <div className={'skills'}>
            <h2>SKILLS</h2>
            <br/>
            <ul>
                {skills.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
            <br/>
            <span>______________________________________</span>
        </div>
    )
}
