import { useState } from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import Stats from "./components/Stats";
import Section from "./components/Section";





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
<Button onClick={handleGoodClick} text = "good"/>
<Button onClick={handleNeutralClick} text = "neutral"/>
<Button onClick={handleBadClick} text = "bad"/>

    <Section/>

    <Stats  text = "good" stat = {goodStat}  />
    <Stats text = "neutral" stat = {neutralStat}/>
    <Stats text = "bad" stat = {badStat}/>
    <p>
      all : {all}
    </p>
</>

    
  )

}

export default App