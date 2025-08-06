import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Card from '../components/Card/Card';

const useProductFilter = (products) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedRecommended, setSelectedRecommended] = useState(null);
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => setQuery(e.target.value);
  const handleCategoryChange = (e) => setSelectedCategory(e.target.value);
  const handlePriceChange = (e) => setSelectedPrice(e.target.value);
  const handleColorChange = (e) => setSelectedColor(e.target.value);
  const handleRecommendedClick = (e) => setSelectedRecommended(e.target.value);

  const filteredItems = products.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  const filteredData = () => {
    let filteredProducts = query ? filteredItems : products;

    if (selectedCategory) {
      filteredProducts = filteredProducts.filter(
        ({ category }) =>
          category === selectedCategory
      );
    }

    if (selectedRecommended) {
      filteredProducts = filteredProducts.filter(
        ({ company }) =>
          company === selectedRecommended
      );
    }

    if (selectedPrice) {
      filteredProducts = filteredProducts.filter(
        ({ newPrice }) => newPrice === selectedPrice
      );
    }

    if (selectedColor) {
      filteredProducts = filteredProducts.filter(
        ({ color }) => color === selectedColor
      );
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={uuidv4()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  };

  return {
    query,
    handleInputChange,
    handleCategoryChange,
    handlePriceChange,
    handleColorChange,
    handleRecommendedClick,
    result: filteredData(),
  };
}

export default useProductFilter
