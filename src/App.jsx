import React from 'react'
import StartPage from "./StartPage"
import QuizPage from "./QuizPage"
import './App.css'

function App() {
  const [startApp, setStartApp] = React.useState(false)
    
    
  function startAppfunc(){
      setStartApp(true);
  }
  
  function restartApp(){
    setStartApp(false);
  }
  
  return (<main className="App">
       { startApp? <QuizPage restartAppFunc={restartApp}/>:   <StartPage startAppfunc={startAppfunc}/>}
  </main>)
}
export default App
