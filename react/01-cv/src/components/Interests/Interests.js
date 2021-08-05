import './Interests.css'

export default function Interests() {
    const interests = ['Football', 'Investing', 'Cars', 'Working out'];
    return (
        <div className={'interests'}>
            <h2>INTERESTS</h2>
            <br/>
            <ul>
                {interests.map((interest, index) => <li key={index}>{interest}</li>)}
            </ul>
        </div>
    )
}
