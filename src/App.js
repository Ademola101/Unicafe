import { useState } from "react";

const Header = () => {
  return(
    <h1>

      Give feedback
    </h1>
  )
};

const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}>
{text}
    </button>
  )
  
};

const Section = () => {
  return (
    <section>
      Satistics
    </section>
    

  )
};

const Stats = ({stat,text}) => {
  return(
<p>
{text}: {stat}
  
</p>
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

  const goodStat = () => {
    return(
    feedback.filter(item => item ==="G").length)
  }

  return(
<>
<Header/>
<Button onClick={handleGoodClick} text = "good"/>
<Button onClick={handleNeutralClick} text = "neutral"/>
<Button onClick={handleBadClick} text = "bad"/>

    <Section/>

    <Stats stat = {goodStat} text = "good" />
    <Stats text = "bad" stat = {goodStat}/>
</>

    
  )

}

export default App