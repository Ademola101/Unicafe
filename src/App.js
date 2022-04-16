import { useState } from 'react'
const App = () => {
  const [click, setClick] = useState({
    left: 0,
    right: 0
  })

 const handleRightClick = () => {

  setClick({ ...click,
    right: click.right + 1})
  };

  const handleLeftClick = () => {
       setClick({ ...click,
        left: click.left + 1})

  };


  return(
    <>
      {click.left}
      <button onClick = {handleLeftClick}> left </button>
      <button onClick = {handleRightClick}> right </button>
      {click.right}
      
      </>
  )

  
}

export default App
