
import { useState, useEffect } from "react";
import "./SVGButton.css";

interface SVGButtonProps {
    key: number;
    className: string;
    onClick: () => void;
    isClicked: boolean;
    setIsClicked: (clicked: boolean) => void;
    text: string;
}

function SVGButton({ key, className, onClick, isClicked, setIsClicked, text} : SVGButtonProps) {

    const [isHovered, setIsHovered] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    const handleClick = () => {
        if (!isDisabled) {
            setIsClicked(true);
            // Perform click action here
            setIsDisabled(true);
            onClick();
        }
    };
    useEffect(() => {
        if (!isClicked){
            setIsDisabled(false);
        }
    }
    , [isClicked]);

    const buttonStyle = {
        cursor: isDisabled ? "not-allowed" : "pointer",
        opacity: isDisabled ? 0.5 : 1,
        // Hover effect
        backgroundColor: isHovered ?  "#A9927D": "#22333B",
    };

    
    return <button className={className +  " svg-button"}
    style={buttonStyle} 
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    onClick={handleClick}
    key={key}
    >{text}</button>;
}

export default SVGButton;