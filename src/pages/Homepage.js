import React from 'react';
import { PizzaTypes, Sort, PizzaItem } from '../components';

function Homepage({ items }) {
  return (
    <div className="container">
      <div className="content__top">
        <PizzaTypes
          onClick={(item) => console.log(item)}
          items={['Мясные', 'Вегетерианская', 'Гриль', 'Острые', 'Закрытые']}
        />
        <Sort items={['популярности', 'цене', 'алфавиту']} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items.map((obj) => (
          <PizzaItem key={obj.id} {...obj} />
        ))}
      </div>
    </div>
  );
}

export default Homepage;
