import React from 'react';
import pizzaLogo from '../scss/assets/img/pizza-logo.svg';
import Button from './Button';

function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="header__logo">
          <img width="38" src={pizzaLogo} alt="Pizza logo" />
          <div>
            <h1>Pizza Antonio</h1>
            <p>Tasty Pizza</p>
          </div>
        </div>
        <div className="header__cart">
          <Button className="button--cart" />
        </div>
      </div>
    </div>
  );
}

export default Header;
