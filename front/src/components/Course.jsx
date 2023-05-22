import React, { useState } from "react";
import UserStore from "../store/UserStore";
import { Link, NavLink } from "react-router-dom";

export const Course = ({ title, id, cost, disabled }) => {
  const [price, setPrice] = useState(cost);

  return (
    <div className="course">
      <div className="about">
        <p className="name">{title}</p>
        <p className="script">
          *Описание курса*
        </p>
      </div>
      <Link
        to="/school"
        className="name_school"
        style={{ textDecoration: " none", color: "black" }}>
        Школа программирования "SHIFT"
      </Link>
      <button
        className="cost"
        disabled={disabled}
        onClick={() => {
          setPrice("в корзине");
          UserStore.putCourse(id);
        }}>
        {disabled === true ? "в корзине" : price}
      </button>
    </div>
  );
};
