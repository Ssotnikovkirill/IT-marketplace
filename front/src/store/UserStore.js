import { makeAutoObservable, configure } from "mobx";
import axiosConfig from "../utils/axiosConfig";
configure({
  enforceActions: "never",
});

class UserStore {
  username = "";
  token = "";
  first_name = "";
  isAuthenticated = false;
  role = "";
  categorylist = [];
  coursesList = [];
  basketList = [];
  constructor() {
    makeAutoObservable(this);
  }

  login = async (username, password, get_token) => {
    const params = new URLSearchParams();
    params.append("username", `${username}`);
    params.append("password", `${password}`);
    const response = await axiosConfig().get(
      `users/login/?${params.toString()}`,
    );

    try {
      if (response.status === 200) {
        this.isAuthenticated = true;
        const { API_Key } = await response.data;

        this.username = username;
        this.token = API_Key;
        if (get_token) {
          localStorage.setItem("token", this.token);
        }
        alert("Вы вошли в аккаунт!!!");
        console.log("Авторизация прошла успешно");
        return true;
      } else {
      }
    } catch (error) {
      alert("Неверные учетные данные");
      console.error(error);
    }
  };
  auth = async () => {
    const token = localStorage.getItem("token");
    if (token !== null && this.isAuthenticated === false) {
      const response = await axiosConfig().get(`users/auth/?API_Key=${token}`);
      if (response.status === 200) {
        const { username, API_Key, first_name, last_name, role } =
          await response.data;
        this.isAuthenticated = true;
        this.username = username;
        this.first_name = first_name;
        this.role = role;
        this.last_name = last_name;
        this.token = API_Key;

        console.log("Аутентификация прошла успешно!");
      } else {
        alert("Зайдите еще раз!");
      }
    } else {
    }
  };
  logout = () => {
    this.isAuthenticated = false;
    this.username = "";
    this.token = "";
    localStorage.removeItem("token");
    alert("Вы вышли из аккаунта!!!");
  };
  getCategory = async (id) => {
    console.log(id);
    const response = await axiosConfig().get(`categories/${id}/`);
    console.log(response.data);
    this.coursesList = response.data;
    if (this.isAuthenticated) {
      await this.getBasket();
      console.log(123);
    }
  };
  getCategories = async () => {
    const response = await axiosConfig().get(`categories/`);
    this.categorylist = response.data;

    console.log(response.data);
    return response.data;
  };
  putCourse = async (id) => {
    console.log(id);
    if (this.isAuthenticated === false) {
      alert("Авторизируйтесь!!!");
    } else {
      const response = await axiosConfig().post(`baskets/`, { id: id });
      console.log(response.data);
    }
  };
  getBasket = async () => {
    if (this.isAuthenticated === false) {
    } else {
      const response = await axiosConfig().get(`baskets/`);
      console.log(response.data);
      this.basketList = response.data;
      console.log(response.data);
    }
  };
  registration = async (name, pass) => {
    if (this.isAuthenticated === false) {
      const response = await axiosConfig().post(`users/register/`, {
        username: name,
        password: pass,
      });
      console.log(response);
      if (response.status === 200) {
        this.login(name, pass, true);
        return true;
      }
    } else {
    }
  };
}
export default new UserStore();
