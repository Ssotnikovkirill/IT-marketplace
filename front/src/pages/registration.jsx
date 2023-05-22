import React, { useState } from "react";
import UserStore from "../store/UserStore";
import { useNavigate } from "react-router-dom";

export const Registration = () => {
  const [name, setName] = useState();
  const [pass, setPass] = useState();
  const navigate = useNavigate();
  const register = async () => {
    let bool = await UserStore.registration(name, pass);

    if (bool === true) {
      let path = `/`;
      navigate(path);
    }
  };
  return (
    <div>
      <center className="center">

        <div class="publish" style={{ marginTop: "50px" }}>
          <div class="con">
            <p class="poch">Логин</p>
            <input
              type="text"
              class="email"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Введите Логин"
            />
          </div>
          <div class="con">
            <p class="login">Пароль</p>
            <input
              type="text"
              class="log"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              placeholder="Введите пароль"
            />
          </div>
          <div class="gh">
            <button
              class="enter"
              onClick={() => {
                register();
              }}>
              Зарегистрироваться
            </button>
          </div>
        </div>
      </center>
    </div>
  );
};
