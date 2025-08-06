const Input = ({ handleChange, value, title, name, color }) => {
  const style = color === 'white' ? {backgroundColor: color, border: "2px solid black"} : {backgroundColor: color}

  return (
    <label className="sidebar-label-container">
      <input onClick={handleChange} type="radio" value={value} name={name} />
      <span className="checkmark" style={style}></span>{title}
    </label>
  )
}

export default Input