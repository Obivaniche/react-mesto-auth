import React from 'react';
import logo from '../images/logo.svg';
import { Link } from 'react-router-dom'


function Header() {
  
  return (
    <header className="header">
    <img className="header__logo" src={logo} alt="Логотип" />
    <Link
        to={location.pathname === "/sign-in" ? "/sign-up" : "/sign-in"}
        className="header__link"
      >
        {location.pathname === "/sign-in" ? "Регистрация" : "Вход"}
      </Link>
  </header>
  );
}

export default Header;