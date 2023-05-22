import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import UserStore from "../store/UserStore";
import { observer } from "mobx-react-lite";
import { Course } from "../components/Course";

export const Courses = observer(() => {
  const { id } = useParams();
  useEffect(() => {
    UserStore.getCategory(id);
  }, []);
  return (
    <div className="mgBotom">
      <center>
        {UserStore.coursesList.map((el) => {
          let disabled = false;
          if (UserStore.isAuthenticated) {
            UserStore.basketList.map((elem) => {
              if (elem.product.id === el.id) {
                console.log(321);
                disabled = true;
              }
            });
          }
          return (
            <Course
              key={el.id}
              title={el.name}
              id={el.id}
              cost={el.price}
              disabled={disabled}
            />
          );
        })}
      </center>
    </div>
  );
});
