import React from 'react';
import { Route } from 'react-router-dom';
import { Header } from './components';
import { HomePage, Cart } from './pages';

function App() {
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
