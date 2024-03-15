import React from 'react';
import './Drink.css';

function Drink({ name, price, imageUrl, onDrinkSelect }) {
  return (
    <tr>
      <td className="DrinkImg">
        <img src={imageUrl} style={{ width: '100px' }} />
      </td>
      <td className="DrinkName">{name}</td>
      <td>{price}</td>
      <td>
        <button onClick={() => onDrinkSelect(name)}>선택</button>
      </td>
    </tr>
  );
}

export default Drink;
