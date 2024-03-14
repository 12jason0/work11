import React, { useState } from 'react';
import Drink from './Drink';
import './DrinkList.css';

function DrinkList() {
  // 선택된 음료들의 목록을 배열로 관리
  const [selectedDrinks, setSelectedDrinks] = useState([]);

  const drinks = [
    {
      imageUrl: '/americano.jpg',
      name: '아메리카노',
      price: '4000원',
    },
    { imageUrl: '/moca.jpg', name: '카페 라떼', price: '4000원' },
    {
      imageUrl: '/ratte.jpg',
      name: '초코라떼',
      price: '4000원',
    },
    {
      imageUrl: '/mango.jpg',
      name: '망고 블렌디드',
      price: '4000원',
    },
    {
      imageUrl: '/berry.jpg',
      name: '딸기 요거트 블렌디드',
      price: '4000원',
    },
    {
      imageUrl: '/Citron.jpg',
      name: '유자 블렌디드',
      price: '4000원',
    },
  ];

  const handleDrinkSelect = (name) => {
    // 이미 선택된 음료인지 확인하고, 아니면 추가
    if (!selectedDrinks.includes(name)) {
      setSelectedDrinks([...selectedDrinks, name]);
    } else {
      // 이미 선택된 음료를 다시 선택하면 목록에서 제거
      setSelectedDrinks(selectedDrinks.filter((drink) => drink !== name));
    }
  };

  return (
    <div>
      {/* 선택된 음료들을 표시 */}
      <h3>
        {selectedDrinks.length > 0
          ? selectedDrinks.join(', ') + '를 고르셨군요!'
          : '원하는 음료를 선택해 주세요.'}
      </h3>
      <table>
        <thead>
          <tr>
            <th>음료</th>
            <th>음료명</th>
            <th>가격</th>
            <th>선택</th>
          </tr>
        </thead>
        <tbody>
          {drinks.map((drink, index) => (
            <Drink key={index} {...drink} onDrinkSelect={handleDrinkSelect} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DrinkList;
