import React, { useEffect, useState } from "react";
import mainImg from "../images/main_foto.png";
import { Category } from "../components/Category";
import UserStore from "../store/UserStore";
import { observer } from "mobx-react-lite";
export const Index = observer(() => {
  useEffect(() => {
    UserStore.getCategories();
  }, []);

  return (
    <div>
      <div className="one">
        <div>
          <p className="dis">
            Быстрая помощь <br /> в{" "}
            <strong style={{ color: "#07387E" }}>
              <em>поиске</em>
            </strong>{" "}
            курса!
          </p>
          <p className="distwo">
            Найди своего преподавателя и научись любимому делу
          </p>
        </div>
        <img className="img_fon" src={mainImg} alt="" />
      </div>
      <div className="all">
        <div className="divnspr">
          <p className="napr">Направления:</p>
        </div>
        <div className="grid" style={{ marginTop: "120px" }}>
          {UserStore.categorylist.map((el, index) => {
            return <Category key={index} text={el.name} id={el.id}></Category>;
          })}
        </div>
      </div>
    </div>
  );
});
