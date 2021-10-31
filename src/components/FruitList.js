import React from 'react'
import { useState } from 'react';

export default function FruitList() {
  const [fruits, setFruits] = useState([
      { name: "banana", color: "yellow", price: 2 },
      { name: "cherry", color: "red", price: 3 },
      { name: "strawberry", color: "red", price: 4 },
      ]);
  
  const nomes = fruits.map((fruta => fruta.name))
  const redFilter = fruits.filter((color) => color.color === 'red')
  const totalPrice = fruits.reduce((acc, obj) => (acc + obj.price), 0)
  
  function filterRedFruits() {
    setFruits(redFilter)
  }
        
  return (
    <div>
      <span> Preco total  =  {totalPrice}</span>
      <ul>
        {nomes.map((fruta) => (
          <li>{fruta}</li>
        ))}
      </ul>
      <button onClick={() => filterRedFruits()}>Mostrar frutas vermelhas</button>
    </div>
  );  
}
