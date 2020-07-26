import React from 'react';
import { Link, Route } from 'react-router-dom';
import pizzaLogo from '../scss/assets/img/pizza-logo.svg';
import Button from './Button';

function Header() {
  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo">
            <img width="38" src={pizzaLogo} alt="Pizza logo" />
            <div>
              <h1>Pizza Antonio</h1>
              <p>Tasty Pizza</p>
            </div>
          </div>
        </Link>
        <div className="header__cart">
          <Link to="/cart">
            <Route exact path="/">
              <Button className="button--cart" />
            </Route>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
