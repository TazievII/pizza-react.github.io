import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPizzas } from '../redux/actions/pizzas';
import { PizzaTypes, Sort, PizzaItem, PizzaLoader } from '../components';
import { setCategory, setSortBy } from '../redux/actions/filters';

const categories = ['Мясные', 'Вегетерианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
  { name: 'популярности', type: 'popular' },
  { name: 'цене', type: 'price' },
  { name: 'алфавиту', type: 'alphabet' },
];

function Homepage() {
  const dispatch = useDispatch();
  const pizzas = useSelector(({ pizzas }) => pizzas.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy} = useSelector(({ filters }) => filters);

  React.useEffect(() => {
    if (!pizzas.length) {
    dispatch(fetchPizzas());
    }}, [category, sortBy]);
  const selectedCategory = React.useCallback((index) => {
    if (!pizzas.length) {
    dispatch(setCategory(index));
  }}, [dispatch]);

  const onSelectSortBy = React.useCallback((type) => {
    dispatch(setSortBy(type));
  }, [dispatch]);

  return (
    <div className="container">
      <div className="content__top">
        <PizzaTypes
          activeCategory={category}
          onClickCategory={selectedCategory}
          items={categories}
        />
        <Sort
          activeSortBy={sortBy}
          onClickSort={onSelectSortBy}
          items={sortItems}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded 
        ? pizzas.map((obj) => <PizzaItem key={obj.id} isLoading={true} {...obj} />) 
        : Array(10).fill(0).map((_, index) => <PizzaLoader kay={index} />)}
      </div>
    </div>
  );
}

export default Homepage;
