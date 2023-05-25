import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home.routes";
import Signup from "./Signup.routes";
import Login from "./Login.routes";
import SinglePage from "./SinglePage.routes";
import SavedRecipes from "./SavedRecipes.routes";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/signup"} element={<Signup />} />
      <Route path={"/login"} element={<Login />} />
      <Route path={"/savedrecipes"} element={<SavedRecipes />} />
      <Route path={"/recipe/:id"} element={<SinglePage />} />
    </Routes>
  );
};

export default AllRoutes;
