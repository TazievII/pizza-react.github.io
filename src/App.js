import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { Header } from './components';
import { HomePage, Cart } from './pages';
import { setPizzas } from './redux/actions/pizzas';
import store from './redux/store'

/* function App() {
  const [pizzas, setPizzas] = React.useState([]);

  React.useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
     setPizzas(data.pizzas);
    })
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
*/

class App extends React.Component {
  componentDidMount() {
      axios.get('http://localhost:3000/db.json').then(({ data }) => {
        store.dispatch(setPizzas(data.pizzas))
      });
  }
  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route exact path="/" render={() => <HomePage items={this.props.items} />} />
          <Route exact path="/cart" component={Cart} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.pizzas.items
  }
}

export default connect(mapStateToProps)(App);
