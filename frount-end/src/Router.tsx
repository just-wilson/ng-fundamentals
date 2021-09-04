import { HomePage } from "./Pages/HomePage";
import React from "react";
import { HOME_ROUTE } from "./Routes";
import { Route } from "react-router-dom";

export const Router = () => {
  return <Route path={HOME_ROUTE} component={HomePage} />;
};
