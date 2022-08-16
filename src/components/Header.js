import React from 'react';
import logo from '../images/logo.svg';
import { useLocation, Link } from "react-router-dom";


function Header(props) {

  const location = useLocation();

  const HeaderLink = () => {
    return (
      <Link
        to={location.pathname === "/sign-in" ? "/sign-up" : "/sign-in"}
        className="header__link"
      >
        {location.pathname === "/sign-in" ? "Регистрация" : "Вход"}
      </Link>
    );
  };

  const HeaderNav = () => {
    return (
      <div className="header__navbar">
        <a className="header__link">{props.userEmail}</a>
        <button className="button header__exit-button" type="button" onClick={props.handleLogOut}>Выйти</button>
      </div>
    );
  };
  
  return (
    <header className="header">
    <img className="header__logo" src={logo} alt="Логотип" />
    {props.isLoggedIn ? <HeaderNav /> : <HeaderLink />}
  </header>
  );
}

export default Header;