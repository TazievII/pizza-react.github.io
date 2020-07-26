import React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { Route } from 'react-router-dom';
import { Header } from './components';
import { HomePage, Cart } from './pages';
import { setPizzas } from './redux/actions/pizzas';


function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    axios.get('http://localhost:3001/pizzas').then(({ data }) => {
      dispatch(setPizzas(data));
    });
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
