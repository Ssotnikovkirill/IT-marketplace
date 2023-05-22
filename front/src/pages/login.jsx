import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import UserStore from "../store/UserStore";
export const Login = () => {
  const [name, setName] = useState();
  const [pass, setPass] = useState();
  let navigate = useNavigate();
  const login = async () => {
    let bool = await UserStore.login(name, pass, true);
    if (bool === true) {
      let path = `/`;
      navigate(path);
    }
  };
  return (
    <center>
      <div className="publish" style={{ marginTop: "136px" }}>
        <div className="con">
          <p className="poch">Почта</p>
          <input
            type="text"
            className="email"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="Введите email"
          />
        </div>
        <div className="con">
          <p className="login">Пароль</p>
          <input
            type="text"
            className="log"
            value={pass}
            onChange={(e) => {
              setPass(e.target.value);
            }}
            placeholder="Введите пароль"
          />
        </div>
        <NavLink className="donth" to="/registartion">
          У вас нет аккаунта
        </NavLink>
        <div className="gh">
          <button className="enter" onClick={login}>
            Вход
          </button>
        </div>
      </div>
    </center>
  );
};
