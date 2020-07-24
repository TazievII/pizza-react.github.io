import React from 'react';

function PizzaTypes({ items, onClick }) {
  const [state, setstate] = React.useState(null);
  const selectItem = (index) => {
    setstate(index);
  }

  return (
    <div className="categories">
      <ul>
        <li className={state === null ? 'active' : ''} onClick={() => selectItem(null)}>Все</li>
        {items && items.map((item, index) => (
          <li 
          className={state === index ? 'active' : ''}
          onClick={() => selectItem(index)} 
          key={`${item}_${index}`}>
          {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PizzaTypes;
