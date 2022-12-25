import React from "react"

export default function StartPage(props){
    
    return (
        <div className="start-page">
            <img className="right-blob" src="./assets/right_blob.svg" />
            <h2 className="karla-font start-title">Quizzical</h2>
            <h6 className="start-subtitle">Some description if needed</h6>
            <button className="inter-btn start-btn" onClick={props.startAppfunc} >Start quiz</button>
            <img className="left-blob" src="./assets/left_blob.svg"/>
        </div>
    )
}