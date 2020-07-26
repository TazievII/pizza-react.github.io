import React from 'react';
import { Route } from 'react-router-dom';
import { Header } from './components';
import { HomePage, Cart } from './pages';

function App() {
  const [pizzas, setPizzas] = React.useState([]);

  React.useEffect(() => {
    fetch('http://localhost:3000/db.json')
      .then((res) => res.json())
      .then((json) => {
        setPizzas(json.pizzas);
      })
      .catch((err) => console.log(err.message('Ошибка')));
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/" render={() => <HomePage items={pizzas} />} />
        <Route exact path="/cart" component={Cart} />
      </div>
    </div>
  );
}

export default App;
