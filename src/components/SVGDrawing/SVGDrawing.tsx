import { useEffect, useState, JSX } from "react";
import SVGButton from "../SVGButton/SVGButton";
import "./SVGDrawing.css";

interface svgObject{
    svg: string;
    name: string;
    code: string;
}

// Shuffle outputparts
const shuffleItems = (parts: svgObject[]):svgObject[] => {
    const shuffled = [...parts]; // Create a copy
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};



function SVGDrawing(props: {svgs:svgObject[], expectedImage: string, credit: JSX.Element}) {
    // Create context
    const [render,setRenderer] = useState<svgObject[]>([]);
    const [output, setOutput] = useState(<div className="output"> </div>);
    const [outputCode, setOutputCode] = useState(<div className="output-code"> </div>);
    const [items, setItems] = useState<svgObject[]>(props.svgs);
    const [isClicked, setIsClicked] = useState(false);
    const [reset] = useState(false);
    const [showTitle, setShowTitle] = useState(false);
    const [showExpectedImage, setShowExpectedImage] = useState(false);
    
    useEffect(() => {
        const svgs = render.map((part:svgObject, index) => { 
            return <img src={part.svg} key={index} className="output-part" alt="output part" />
        });
        setOutput(<div className="output">{svgs}</div>);
        const code = render.map((part:svgObject, index) => {
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
        
            <SVGButton key={index} className="output-part-button" onClick= {()=>
                {
                    setRenderer((prev) => [...prev, part]);
                    handleClick(part.svg);
                }
            }
            isClicked={isClicked}
            setIsClicked={setIsClicked}
            text={showTitle ? `Draw ${part.name}`:`Draw Part ${index + 1}` }
            />
        
    )});

    const buttons = tmp.reduce((accumulator: JSX.Element[], currentValue: JSX.Element, index: number, array:JSX.Element[]) => {
        // If the index is even, create a new row
        
        if (index % 2 === 0) {
            if (index === array.length-1) {
                accumulator.push(
                    <div className="button-row" key={`row-${Math.floor(index / 2)}`}>
                        {currentValue}
                    </div>
                );
            }
            else{
                accumulator.push(
                    <div className="button-row" key={`row-${Math.floor(index / 2)}`}>
                        {tmp.slice(index, index + 2)} {/* Take the current and next button */}
                    </div>
                );
            }
        }
        
        return accumulator;
    }, []);

    
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