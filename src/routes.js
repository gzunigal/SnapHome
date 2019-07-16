import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";

import Home from "./pages/Home";
import Catalogo from "./pages/Catalogo";
import Producto from "./pages/Producto";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/catalogo" component={Catalogo} />
      <Route path="/producto/:id" component={Producto} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
