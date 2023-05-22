import React from "react";
import { NavLink } from "react-router-dom";
import UserStore from "../store/UserStore";

export const Category = ({ text, id }) => {
  return (
    <>
      <NavLink
        onClick={() => UserStore.getCategory(id)}
        style={{
          textDecoration: "none",
          paddingTop: "25px",
          paddingBottom: "25px",
          paddingLeft: "20px",
          paddingRight: "20px",
        }}
        className="buttonnapr"
        to={`/courses/${id}`}>
        {text}
      </NavLink>
    </>
  );
};
