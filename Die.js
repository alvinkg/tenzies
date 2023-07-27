import React from "react"

export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
    
    function dotFaces(){
    if(props.value === 1){
        return (
            <div className="dotFaces">
                <span className=""> </span>
                <span className=""> </span>
                <span className=""> </span>
                
                <span className=""> </span>
                <span className="dot"> </span>
                <span className=""> </span>
                
                <span className=""> </span>
                <span className=""> </span>
                <span className=""> </span>
            </div>
        )
    }
    
    if(props.value === 2){
        return (
            <div className="dotFaces">
                <span className="dot"> </span>
                <span className=""> </span>
                <span className=""> </span>
                
                <span className=""> </span>
                <span className=""> </span>
                <span className=""> </span>
                
                <span className=""> </span>
                <span className=""> </span>
                <span className="dot"> </span>
            </div>
        )
    }
    if(props.value === 3){
        return (
            <div className="dotFaces">
                <span className="dot"> </span>
                <span className=""> </span>
                <span className=""> </span>
                
                <span className=""> </span>
                <span className="dot"> </span>
                <span className=""> </span>
                
                <span className=""> </span>
                <span className=""> </span>
                <span className="dot"> </span>
            </div>
        )
    }
    if(props.value === 4){
        return (
            <div className="dotFaces">
                <span className="dot"> </span>
                <span className=""> </span>
                <span className="dot"> </span>
                
                <span className=""> </span>
                <span className=""> </span>
                <span className=""> </span>
                
                <span className="dot"> </span>
                <span className=""> </span>
                <span className="dot"> </span>
            </div>
        )
    }
    
    if(props.value === 5){
        return (
            <div className="dotFaces">
                <span className="dot"> </span>
                <span className=""> </span>
                <span className="dot"> </span>
                
                <span className=""> </span>
                <span className="dot"> </span>
                <span className=""> </span>
                
                <span className="dot"> </span>
                <span className=""> </span>
                <span className="dot"> </span>
            </div>
        )
    }
    if(props.value === 6){
        return (
            <div className="dotFaces">
                <span className="dot"> </span>
                <span className=""> </span>
                <span className="dot"> </span>
                
                <span className="dot"> </span>
                <span className=""> </span>
                <span className="dot"> </span>
                
                <span className="dot"> </span>
                <span className=""> </span>
                <span className="dot"> </span>
            </div>
        )
    }
    
}
let y = dotFaces()
    
    return (
        <div 
            className="die-face" 
            style={styles}
            onClick={props.holdDice}
        >
            {y}
            
        </div>
    )
}