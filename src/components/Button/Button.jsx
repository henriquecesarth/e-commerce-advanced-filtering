import { useEffect, useState } from 'react';

const Button = ({ handleClick, value, title, activeIndex, handleIndex }) => {
  const [buttonSelected, setButtonSelected] = useState(false)

  useEffect(() => {
    setButtonSelected(value === activeIndex ? true : false)
    console.log(activeIndex)
    console.log(buttonSelected)
  },[activeIndex])
  
  const selectButton = e => {
    console.log(e.target)
    handleClick(e)
    handleIndex(e)
  }

  return (
    <button onClick={selectButton} value={value} className={buttonSelected ? 'btns active' : 'btns'}>{title}</button>
  )
}

export default Button