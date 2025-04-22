// import svgs from assets / penguin.svg
import penguinExpected from '../../assets/penguin/penguin.svg';
import penguinBody from '../../assets/penguin/body.svg';
import penguinScarf from '../../assets/penguin/scarf.svg';
import penguinShadow from '../../assets/penguin/shadow.svg';
import penguinWingsAndFlippers from '../../assets/penguin/wings_and_flippers.svg';
import penguinBalloon from '../../assets/penguin/balloon.svg';
import penguinBodyDetails from '../../assets/penguin/body_details.svg';
import penguinEyes from '../../assets/penguin/eyes.svg';
import penguinEyeDetails from '../../assets/penguin/eye_detail.svg';
import "./Sequencing.css";
import SVGDrawing from "../../components/SVGDrawing/SVGDrawing";
import { useEffect } from 'react';



let penguinParts = [
    {"svg":penguinShadow, "name":"Shadow", "code":"drawShadow()"},
    {"svg":penguinBody, "name":"Body", "code":"drawBody()"},
    {"svg":penguinScarf, "name":"Scarf", "code":"drawScarf()"},
    {"svg":penguinWingsAndFlippers, "name":"Wings and Flippers", "code":"drawWingsAndFlippers()"},
    {"svg":penguinBalloon, "name":"Balloon", "code":"drawBalloon()"},
    {"svg":penguinBodyDetails, "name":"Body Details", "code":"drawBodyDetails()"},
    {"svg":penguinEyes, "name":"Eyes", "code":"drawEyes()"},
    {"svg":penguinEyeDetails, "name":"Eye Details", "code":"drawEyeDetails()"}
];

const img = <p>Image by <a href=" https://www.vectorportal.com" >Vectorportal.com</a>,  <a className="external text" href="https://creativecommons.org/licenses/by/4.0/" >CC BY</a></p>


function Sequencing() {

    useEffect(() => {
        document.title = "Sequencing";
    }, []);
    return (
    <div className="sequencing">
        <SVGDrawing svgs={penguinParts} expectedImage={penguinExpected} credit={img}/>
        
    </div>
    );
}

export default Sequencing;