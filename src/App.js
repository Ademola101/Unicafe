import { useState } from "react";

const Header = () => {
  return(
    <p>

      Give feedback
    </p>
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

const App = () => {

  const [feedBack, setFeedBacks] = useState(0)

  return(
<>
<Header/>

    <Section/>
</>

    
  )

}

export default App