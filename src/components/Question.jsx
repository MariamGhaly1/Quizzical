import React from "react"
import {nanoid} from "nanoid"

import ChoiceBtn from "./ChoiceBtn"

export default function Question(props){

    //props.question   (question)

    
    return (

        <div className="question" >
            <h3  className="question-text">{props.question.question}</h3>
                    <div className="choices">
                    {choices_array.map(choice=> <ChoiceBtn key={nanoid()} text={choice} 
                    choiceState={choice !== item.correct_answer? false: true}
                    showResults={showResults}
                    selectAnswer= {()=>selectBtn(choice, questionIndex)}/>
                    )}
                    </div>
                    {(questionIndex !== quizData.length-1) && <hr/>}
                </div>
        
    )
}