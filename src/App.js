import { useState } from 'react'


const History = ({allClick}) => {
  if (allClick.length === 0) {
    return (
      <p>

This app is used by pressing the button
      </p>
    )
    }
    return (
     <p>

button press history  {allClick.join(' ')}
     </p>
    )
  
}
const App = () => {

const [right, setRight] = useState(0);
const [left, setLeft] = useState(0);
const [allClick, setAll] = useState([]);

const handleRightClick = () => {
  setAll(allClick.concat('R')) 
  // concat because we dont want to modify the state directly
  setRight(right + 1)
};
const handleLeftClick = () => {
  setAll(allClick.concat('L'))
  setLeft(left + 1)
};

// debugger

return (
  <> 
  <button onClick={handleRightClick}>

right
  </button>
  {right}
  <button onClick={handleLeftClick}>

left
  </button>
  {left}

 <History allClick = {allClick} />
  </>
)

}  
export default App
