const Button = ({onClick, text}) => {
  return (
    <button className="bg-sky-600 m-3 p-1 rounded" onClick={onClick}>
{text}
    </button>
  )
  
};
export default Button