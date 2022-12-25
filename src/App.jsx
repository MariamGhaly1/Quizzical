import React from 'react'
import StartPage from "./pages/StartPage"
import QuizPage from "./pages/QuizPage"
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
