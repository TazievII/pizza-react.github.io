import React from 'react';

function PizzaTypes({ items, onClick }) {
  return (
    <div className="categories">
      <ul>
        <li className="active">Все</li>
        {items.map((item, index) => (
          <li 
          onClick={() => onClick(item)}
          key={`${item}_${index}`}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default PizzaTypes;
