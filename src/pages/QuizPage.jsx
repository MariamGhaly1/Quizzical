import React from "react"
import {nanoid} from "nanoid"

import ChoiceBtn from "../components/ChoiceBtn"

export default function QuizPage(props){
    
    const [quizData, setQuizData] = React.useState([])
    const [selectedAnswers, setSelectedAnswers] = React.useState({0:"",1:"",2:"",3:"",4:""})
    const [correctAnswersIndeces, setCorrectAnswersIndeces] = React.useState(()=>createCorrectAnswerIndecies())
    
    const [showResults, setShowResults] = React.useState(false)
    const [isInitialized, setIsInitialized] = React.useState(false)


    React.useEffect(()=>{
        fetchQuizData();         
        console.log("USEEFFECT RAN ")
    },[])
    
    
    function fetchQuizData(){
        fetch("https://opentdb.com/api.php?amount=5&type=multiple")
        .then(res=>res.json())
        .then(data=>setQuizData(data.results))
        
    }
    
    function createCorrectAnswerIndecies(){
        let indecesArray= []
        for( let i=0; i<5 ;i++){
         indecesArray.push(Math.floor(Math.random()*4))   
        }
        return indecesArray
    
    }
    
     
    const quizElements = quizData.map( (item, questionIndex)=>{ 
        
        return( <div key={nanoid()}>
                    <h3  className="question">{item.question.replaceAll("&quot;", "\"")}</h3>
                    <div className="choices">
                        {buildChoices(item.incorrect_answers, item.correct_answer, questionIndex)}
                    </div>
                    {(questionIndex !== quizData.length-1) && <hr/>}
                </div>)
    })
    

    function buildChoices(incorrectAnswers, correctAnswer, questionIndex){
        let choicesArray = incorrectAnswers
        if(!isInitialized){
            choicesArray.splice(correctAnswersIndeces[questionIndex], 0, correctAnswer)
            setIsInitialized(true)
        }

        return choicesArray.map(choice=>
            //  <ChoiceBtn key={nanoid()} text={choice} 
            //     choiceState={choice !== correctAnswer? false: true}
            //     showResults={showResults}
            //     selectAnswer= {()=>selectBtn(choice, questionIndex)}/>


            
                    <button

                    key={nanoid()} 
                     style={styleBtnFunc(choice !== correctAnswer? false: true, choice == selectedAnswers[questionIndex], choice == selectedAnswers[questionIndex] )}
                     onClick ={showResults? null: ()=>selectBtn(choice, questionIndex)}
                     >
                    {choice}
                    </button>
            
    )}
    

    
   function selectBtn( choice, questionIndex){
       setSelectedAnswers(oldAnswers=> ({...oldAnswers, [questionIndex]:choice}))
       console.log("inside SelectBtn")
       console.log(selectedAnswers)

   }
   


function styleBtnFunc(choiceState, isSelected){
    if(showResults){
        if(isSelected){
            return choiceState? 
            { padding: "4px 15px",    //right
            margin: "0px 10px",
            borderRadius: "8px",
            fontSize: "11px",
            background: "#94D7A2",
            border:"none",
            color: "#293264"} 
        : { padding: "4px 15px",   //wrong
            margin: "0px 10px",
            borderRadius: "8px",
            fontSize: "11px",
            background: "#F8BCBC",
            border:"none",
            color: "#293264"}
    }else{
        return {
        margin: "0px 10px",
        padding: "4px 15px",
        borderRadius: "8px",
        fontSize: "11px"}
    }
        
    }else{
        return isSelected? 
            {       margin: "0px 10px",
                padding: "4px 15px",
                background: "#D6DBF5",
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
    }
    
    }


    
    function calculateScore(){
        let score =0;
        for(let i =0; i< quizData.length;i++){
           if(quizData[i].correct_answer === selectedAnswers[i]){
            score++;
           }
        }
        return score;
    }
  
    function checkAnswers(){
          setShowResults(true);
    }
  
    function playAgain(){
        setShowResults(false);
        props.restartAppFunc();

    }
    
    
    return(
        <div className="quiz-page">
            <img className="right-blob" src="./assets/right_blob.svg" />
            {quizElements}
            <img className="left-blob " src="./assets/left_blob.svg"/>
            {!showResults &&<button className="main-btn" onClick={checkAnswers}>Check answers</button>}
            {showResults && <div className="result-section">
                 <span className="result-section--text karla-font" >You scored {calculateScore()}/5 correct answers</span>
                 <button className="main-btn" onClick={()=>playAgain()}>Play again</button>
                 </div> }
        </div>
        
    )
}