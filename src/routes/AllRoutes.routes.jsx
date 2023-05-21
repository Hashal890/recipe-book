import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home.routes";
import Signup from "./Signup.routes";
import Login from "./Login.routes";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/signup"} element={<Signup />} />
      <Route path={"/login"} element={<Login />} />
    </Routes>
  );
};

export default AllRoutes;
