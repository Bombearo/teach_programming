import { useEffect, useState } from "react";
import SVGButton from "../SVGButton/SVGButton";
import "./SVGDrawing.css";

// Shuffle outputparts
const shuffleItems = (parts: object[]) => {
    for (let i = parts.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [parts[i], parts[j]] = [parts[j], parts[i]];
    }
    return parts;
};

interface svgObject{
    svg: string;
    name: string;
    code: string;
}

function SVGDrawing(props: {svgs:svgObject[], expectedImage: string, credit: string}) {
    // Create context
    const [render,setRenderer] = useState([]);
    const [output, setOutput] = useState(<div className="output"> </div>);
    const [outputCode, setOutputCode] = useState(<div className="output-code"> </div>);
    const [items, setItems] = useState(props.svgs);
    const [isClicked, setIsClicked] = useState(false);
    const [reset, setReset] = useState(false);
    const [showTitle, setShowTitle] = useState(false);
    const [showExpectedImage, setShowExpectedImage] = useState(false);
    
    useEffect(() => {
        const svgs = render.map((part:svgObject, index) => { 
            return <img src={part.svg} key={index} className="output-part" alt="output part" />
        });
        setOutput(<div className="output">{svgs}</div>);
        const code = render.map((part, index) => {
            return <div key={index} className="output-part-code"><div className="line-number">{index+1}</div><div className='code'>{part.code}</div></div>});
        setOutputCode(<div className="output-code">   
                {code}
            </div>);
    }, [render]);

 

    function handleClick(svg: string) {
        console.log("SVG: ", svg);
        console.log("Clicked!")
        console.log("rendererState: ", render);
    };

    const tmp = items.map((part:svgObject, index) => {
        return (
        
            <SVGButton svg={part.svg} key={index} className="output-part-button" onClick= {()=>
                {
                    setRenderer((prev) => [...prev, part]);
                    handleClick(part.svg);
                }
            }
            resetDisabled={reset}
            isClicked={isClicked}
            setIsClicked={setIsClicked}
            text={showTitle ? `Draw ${part.name}`:`Draw Part ${index + 1}` }
            />
        
    )});

    const buttons = tmp.reduce((accumulator:JSX[], currentValue:ReactNode, index:number, array)=>{
        if (index % 2 === 0 && index !== 0) {

            accumulator.push(<div className="button-row" key={index}>{array.slice(index - 2, index)}</div>);

            console.log("array: ", accumulator);
        }
        if (index === array.length -1) {
            accumulator.push(<div className="button-row" key={index}>{array.slice(index - 1, index+1)}</div>);
        }
        return accumulator;
    }
    ,[]);

    
    const handleReset = () => {
        setRenderer([]);
        setOutput(<div className="output"> </div>);
        setIsClicked(false);
    };

    const menuButtonStyle ={
        cursor: isClicked ? "not-allowed" : "pointer",
        opacity: isClicked ? 0.5 : 1,
    }
    

    return <>
    <div className='button-container'>
        <h2 className="title">Let's Draw</h2>
        {!reset && buttons}
        <div className="menu-buttons">
        <button className="menu-button" onClick={handleReset}
        >Reset</button>
        <button className="menu-button" onClick={() => {
            setItems(shuffleItems(items));
            console.log("Shuffled: ", props);
        }}
        disabled={isClicked}
        style={menuButtonStyle}
        >Shuffle</button>

        <button className="show-title-button" onClick={() => {
            setShowTitle(!showTitle);
        }}
        style={menuButtonStyle}
        >{showTitle ? "Hide Title" : "Show Title"}</button>
        </div>
        
    </div>
  
    <div className='output-container'>
        
        {output}
        {props.credit}
    </div>

    <div className="code-container">
        <div className="output-code">
            <h2>Code:</h2>
            <div className="output-code-container">
                {outputCode}
            </div>
        </div>
        <div className="expected-image-container">
            <div className="expected-image-text">
            <h3>Expected Image:</h3>

            <div className="expected-image-btn">
                <button className="show-expected-image-button" onClick={() => {
                        setShowExpectedImage(!showExpectedImage);
                    }}
                    >{showExpectedImage ? "Hide Expected Image" : "Show Expected Image"}</button>

                
                </div>
            </div>
            
            <div className="expected-image">
                {!showExpectedImage && <p>Click the button to show the expected image</p>}
                {showExpectedImage && <img src={props.expectedImage} alt="expected" className="expected-image-svg" />}
            </div>
        </div>
    </div>
    </>;
}

export default SVGDrawing;