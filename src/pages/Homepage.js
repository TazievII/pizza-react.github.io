import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { PizzaTypes, Sort, PizzaItem } from '../components';
import { setCategory } from '../redux/actions/filters';

const categories = ['Мясные', 'Вегетерианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
  { name: 'популярности', type: 'popular' },
  { name: 'цене', type: 'price' },
  { name: 'алфавиту', type: 'alphabet' },
];

function Homepage() {
  const dispatch = useDispatch();
  const pizzas = useSelector(({ pizzas }) => pizzas.items);
  const selectedCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, [dispatch]);

  return (
    <div className="container">
      <div className="content__top">
        <PizzaTypes
          onClick={selectedCategory}
          items={categories}
        />
        <Sort
          items={sortItems}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {pizzas && pizzas.map((obj) => <PizzaItem key={obj.id} {...obj} />)}
      </div>
    </div>
  );
}

export default Homepage;
