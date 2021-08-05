import './Sidebar.css'
import Img from "../Img/Img";
import Personal from "../Personal/Personal";
import Skills from "../Skills/Skills";
import Languages from "../Languages/Languages";
import Interests from "../Interests/Interests";

export default function Sidebar() {
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