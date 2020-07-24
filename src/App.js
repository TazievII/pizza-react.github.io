import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Header } from './components';
import { HomePage, Cart } from './pages';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <BrowserRouter>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/cart" component={Cart} />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
