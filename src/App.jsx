import { useState } from 'react'
import Nav from './components/Nav/Nav'
import Products from './components/Products/Products'
import Recommended from './components/Recommended/Recommended'
import Sidebar from './components/Sidebar/Sidebar'
import './index.css'
import useProductFilter from './hooks/useProductFilter'
import products from './db/data';


function App() {
const {
    query,
    handleInputChange,
    handleCategoryChange,
    handlePriceChange,
    handleColorChange,
    handleRecommendedClick,
    result,
  } = useProductFilter(products);

  return (
    <>
      <Sidebar handleCategoryChange={handleCategoryChange} handlePriceChange={handlePriceChange} handleColorChange={handleColorChange} />
      <Nav query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleRecommendedClick} />
      <Products result={result}/>
    </>
  )
}

export default App
