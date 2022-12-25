import React from "react"

export default function ChoiceBtn(props){
    // const button_state = new Enum("normal", "selected", "right","wrong", "disabled");
    // choiceState, selectAnswer, text, showResults, isSelected
    
    const [isSelected, setIsSelected] = React.useState(false);
    
    let styles =  isSelected? 
            {       margin: "0px 10px",
                padding: "4px 15px",
                backgroundColor: "#D6DBF5",
                borderRadius: "8px",
                fontSize: "11px",
                border:"none",
                color: "#293264",
            }
         :{
            margin: "0px 10px",
            padding: "4px 15px",
            border: "1px solid #4D5B9E",
            borderRadius: "8px",
            color: "#293264",
            fontSize: "11px",
            backgroundColor:"transparent" }

    
    
    // ()=>{
    // if(props.showResults){
    //     if(isSelected){
    //         return props.choiceState? 
    //         { padding: "4px 15px",    //right
    //         margin: "0px 10px",
    //         borderRadius: "8px",
    //         fontSize: "11px",
    //         background: "#94D7A2",
    //         border:"none",
    //         color: "#293264"} 
    //     : { padding: "4px 15px",   //wrong
    //         margin: "0px 10px",
    //         borderRadius: "8px",
    //         fontSize: "11px",
    //         background: "#F8BCBC",
    //         border:"none",
    //         color: "#293264"}
    // }else{
    //     return {
    //     margin: "0px 10px",
    //     padding: "4px 15px",
    //     borderRadius: "8px",
    //     fontSize: "11px"}
    // }
        
    // }else{
    //     return isSelected? 
    //         {       margin: "0px 10px",
    //             padding: "4px 15px",
    //             background: "#D6DBF5",
    //             borderRadius: "8px",
    //             fontSize: "11px",
    //             border:"none",
    //             color: "#293264",
    //         }
    //      :{
    //         margin: "0px 10px",
    //         padding: "4px 15px",
    //         border: "1px solid #4D5B9E",
    //         borderRadius: "8px",
    //         color: "#293264",
    //         fontSize: "11px",
    //         backgroundColor:"transparent" }
    // }
    
    // }
    
function select(){
    console.log("hhhhhere")
    props.selectAnswer();
    setIsSelected(true);

    console.log(isSelected);
}   



    return(
        <button
         style={styles}
         onClick ={select}
         >
        {props.text}
        </button>
    )
}