import React, { useState } from 'react';
import DrinkList from './DrinkList';

function App() {
  const [selectedDrinks, setSelectedDrinks] = useState([]);

  const handleSelectDrink = (drinkName) => {
    setSelectedDrinks((prevSelectedDrinks) => {
      if (prevSelectedDrinks.includes(drinkName)) {
        return prevSelectedDrinks.filter((drink) => drink !== drinkName);
      } else {
        return [...prevSelectedDrinks, drinkName];
      }
    });
  };

  return (
    <div>
      <h1>메뉴판</h1>
      <DrinkList onSelectDrink={handleSelectDrink} />
    </div>
  );
}

export default App;
