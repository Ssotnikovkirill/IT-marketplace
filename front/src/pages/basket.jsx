import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import UserStore from "../store/UserStore";

export const Basket = observer(() => {
  const [display, setDisplayy] = useState(true);
  useEffect(() => {
    const bask = async () => {
      await UserStore.auth();
      await UserStore.getBasket();
    };
    bask();
  }, [UserStore.isAuthenticated]);
  let totalprice = 0;
  UserStore.basketList.map((el, index) => {
    totalprice += parseFloat(el.product.price);

    return totalprice;
  });
  return (
    <center>
      <h1>Оформить заказ</h1>
      {display ? (
        <div style={{ marginBottom: "100px", minHeight: "70vh" }}>
          {UserStore.basketList.map((el) => {
            console.log(el);
            return (
              <div class="course">
                <div class="about">
                  <p class="name">{el.product.name}</p>
                  <a
                    class="name_school"
                    style={{
                      textDecoration: "none",
                      color: "black",
                    }}
                    href="web_school.html">
                    Школа программирования "Алгоритмика
                  </a>
                </div>
                <button class="cost">{el.product.price}</button>
              </div>
            );
          })}
          <p className="totalPrice">Итого: {totalprice}</p>
        </div>
      ) : (
        <h1 style={{ marginTop: "500px" }}>Успешно!{display}</h1>
      )}

      <button
        className="enter"
        disabled={!display}
        style={{ marginBottom: "50px" }}
        onClick={() => {
          alert("Вы приобрели товар!");
          setDisplayy(!display);
        }}>
        Приобрести
      </button>
    </center>
  );
});
