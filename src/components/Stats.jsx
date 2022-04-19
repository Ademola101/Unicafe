const Stats = ({stat,text}) => {
  return(
<div className="flex flex-row border-2 border-black rounded-md">

  <div className="flex-grow border-r-2 border-black text-center"> {text}</div>
 <div className="flex-grow text-center">


{stat}
  
  </div> 
  
</div>
  )
};

export default Stats
