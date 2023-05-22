import React from "react";
import photo from "../images/fotosch.png";
import "./page.css";
export const Page = () => {
  return (
    <div>
      <center className="center">
        <div class="ent_b">
          <p class="ent">IT школа "Shift"</p>
        </div>
        <div class="edit">
          <img class="foto" src={photo} alt=""></img>
          <div class="edittext">
            <p>
              Лучшие учителя, увлекательные программы и востребованные навыки!
            </p>
          </div>
        </div>
        <div class="edits">
          <p className="offsait">
            Официальный сайт:{" "}
            <a href="https://shift-school.ru/">
            https://shift-school.ru
            </a>{" "}
          </p>
        </div>
        <div>
                <p class="name">Курсы:</p>
                
                <div class="course">
                    <div class="about">
                        <p class="name">Unity</p>
                        <p class="script">Unity - серьезная платформа в основе которой лежит объектно ориентированное программирование, язык C# и серьезные игровые механики.</p>
                    </div>
                    <a class="name_school"  href="web_school.html">IT школа "Shift"</a>
                    <button class="cost">1200 р</button>
                </div>
        </div>
      </center>
    </div>
  );
};
