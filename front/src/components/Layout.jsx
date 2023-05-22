/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { observer } from "mobx-react-lite";
import logo from "../images/school logo 1.svg";
import basket from "../images/basket.svg";
import searc from "../images/search.svg";
import { Link, NavLink, Outlet } from "react-router-dom";
import UserStore from "../store/UserStore";
const Layout = observer(() => {
  return (
    <>
      <header className="head">
        <div className="logo_img">
          <NavLink to="/">
            <img src={logo} alt="" />
          </NavLink>
        </div>
        <div className="search-bar">
          <input type="search" className="site-search" placeholder="Поиск" />
          <button className="bsearch">
            <a href="#" className="txtsearch">
              <img className="img_search" src={searc} alt="" />
            </a>
          </button>
        </div>
        <button className="basket">
          <NavLink to="/basket">
            <img className="img_basket" src={basket} alt="" />
          </NavLink>
        </button>
      </header>
      <Outlet></Outlet>
      <footer>
        <NavLink to="/">
          <img src={logo} alt="" className="logo_img_t" />
        </NavLink>
        <p className="inc">© 2023. Поиschool</p>
        {UserStore.isAuthenticated ? (
          <>
            <button
              className="enter"
              onClick={() => {
                UserStore.logout();
              }}>
              <p className="text">Выход</p>
            </button>
          </>
        ) : (
          <NavLink className="enter" to="/login" >
            <p className="text">Вход</p>
          </NavLink>
        )}
        <p className='svyz'>Свяжитесь с нами для регистрации обр. организации: searchschool@gmail.com</p>
      </footer>
    </>
  );
});
export default Layout;
