import { useState } from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import Stats from "./components/Stats";
import Section from "./components/Section";



const Complex = ({good,neutral,bad, all}) => {
  
  if(all === 0) {
    return(
      <p>
        No feedback given
      </p>

    )
  }
else return(
    <>
    
    <Stats  text = "good" stat = {good}  />
    <Stats text = "neutral" stat = {neutral}/>
    <Stats text = "bad" stat = {bad}/>
    <p>
      all : {all}
    </p>
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
<>
<Header/> 
<div className="section">
<Button onClick={handleGoodClick} text = "good"/>
<Button onClick={handleNeutralClick} text = "neutral"/>
<Button onClick={handleBadClick} text = "bad"/>
</div>

    <Section/>

   <Complex className="section" good= {goodStat} bad = {badStat} neutral = {neutralStat} all = {all}/>

   
</> 
  )

}



export default App