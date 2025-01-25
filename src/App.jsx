import Header from "./components/Header"
import UserInput from "./components/UserInput"
import { useState } from "react"
import Results from "./components/Results"
import "./index.css"
function App() {
  function handleChange(inputidentifier,newvalue){
    setuserInput(prevUserInput=>{
        return{
            ...prevUserInput,
            [inputidentifier]: +newvalue
        }
    })

  }

  const [userInput,setuserInput]= useState({
    initialInvestment:10000,
    annualInvestment:1000,
    expectedReturn:6,
    duration:6

  })
const inputIsvalid =userInput.duration>=1
  return (
    <> 
 <Header/>
<UserInput userInput={userInput}
onChange={handleChange}
/>
{!inputIsvalid && <p className="center">Please Enter valid Duration</p>}
{inputIsvalid && <Results input={userInput} />}
 </>
  )
}

export default App
