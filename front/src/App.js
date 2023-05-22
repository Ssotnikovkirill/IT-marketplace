import React from "react";
import { Routes, Route } from "react-router-dom";

import { observer } from "mobx-react-lite";
import UserStore from "./store/UserStore";
import { Index } from "./pages";
import { Basket } from "./pages/basket";
import { Login } from "./pages/login";
import { Registration } from "./pages/registration";
import Layout from "./components/Layout";
import { Courses } from "./pages/courses";
import { Page } from "./pages/page";
const App = observer(() => {
  const token = localStorage.getItem("token");
  if (token !== null && UserStore.isAuthenticated === false) {
    UserStore.auth(token);
  } else {
  }
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="basket" element={<Basket />} />
          <Route path="login" element={<Login />} />
          <Route path="registartion" element={<Registration />} />
          <Route path="courses/:id" element={<Courses />} />
          <Route path="school" element={<Page />} />
        </Route>
      </Routes>
    </>
  );
});

export default App;
