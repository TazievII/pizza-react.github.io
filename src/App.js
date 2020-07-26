import React from 'react';
import { useDispatch } from 'react-redux';
import { Route } from 'react-router-dom';
import { Header } from './components';
import { HomePage, Cart } from './pages';
import { fetchPizzas } from './redux/actions/pizzas';

function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchPizzas());
  }, [dispatch]);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/" component={HomePage} />
        <Route exact path="/cart" component={Cart} />
      </div>
    </div>
  );
}

export default App;
