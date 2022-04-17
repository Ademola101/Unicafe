const Stats = ({stat,text}) => {
  if (stat.length === 0) {
    return (
      <p>
        No feedback given
      </p>
    )
  }
  return(
<p>
{text}: {stat}
  
</p>
  )
};

export default Stats
