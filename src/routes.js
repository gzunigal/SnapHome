import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";

import Catalogo from "./pages/Catalogo";
import Producto from "./pages/Producto";
import MiSnapHome from "pages/MiSnapHome";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Catalogo} />
      <Route exact path="/catalogo" component={Catalogo} />
      <Route exact path="/misnaphome" component={MiSnapHome} />
      <Route path="/producto/:id" component={Producto} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
