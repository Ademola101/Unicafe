import { useState } from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import Stats from "./components/Stats";
import Section from "./components/Section";
import "./styles/output.css"



const Complex = ({good,neutral,bad, all}) => {
  return(all === 0 ? <p>
    No feedback given. <br/>
    Please give feeback
  </p> : 
    <>
     <Section/>
    <Stats  text = "Good" stat = {good}  />
    <Stats text = "Neutral" stat = {neutral}/>
    <Stats text = "Bad" stat = {bad}/>
    <Stats text = "All ratings" stat = {all}/>
    </>
)
  
  

}

const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [feedback, SetFeedback] = useState([]);

  const handleGoodClick = () => {
    SetFeedback(feedback.concat("G"))
    setGood(good + 1)
  };

  const handleBadClick = () => {
    SetFeedback(feedback.concat("B"))
    setBad(bad + 1)
  }
  const handleNeutralClick = () => {
    SetFeedback(feedback.concat("N"))
    setNeutral(neutral + 1)
  }

  const goodStat = feedback.filter(item => item ==="G").length;
  const neutralStat = feedback.filter(item => item ==="N").length;
  const badStat = feedback.filter(item => item ==="B").length;
  const all = feedback.length 


  return(
<div className="flex justify-center bg-gray-300 h-screen font-serif">
  <div className="flex flex-col gap-10">
<Header/> 
<div>
<Button onClick={handleGoodClick} text = "Good"/>
<Button onClick={handleNeutralClick} text = "Neutral"/>
<Button onClick={handleBadClick} text = "Bad"/>
</div>

   

   <Complex className="section" good= {goodStat} bad = {badStat} neutral = {neutralStat} all = {all}/>

   
</div> </div>
  )

}



export default App