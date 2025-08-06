import './Recommended.css'
import Button from '../Button/Button'
import { useState } from 'react'

const Recommended = ({ handleClick }) => {
  const [activeIndex, setActiveIndex] = useState('')
  const handleIndex = e => setActiveIndex(e.target.value)

  return (
    <>
      <div>
        <h2 className='recommended-title'>Recommended</h2>
        <div className="recommended-flex">
          <Button handleClick={handleClick} value="" title="All Products" activeIndex={activeIndex} handleIndex={handleIndex} />
          <Button handleClick={handleClick} value="Nike" title="Nike" activeIndex={activeIndex} handleIndex={handleIndex} />
          <Button handleClick={handleClick} value="Adidas" title="Adidas" activeIndex={activeIndex} handleIndex={handleIndex} />
          <Button handleClick={handleClick} value="Puma" title="Puma" activeIndex={activeIndex} handleIndex={handleIndex} />
          <Button handleClick={handleClick} value="Vans" title="Vans" activeIndex={activeIndex} handleIndex={handleIndex} />
        </div>
      </div>
    </>
  )
}

export default Recommended