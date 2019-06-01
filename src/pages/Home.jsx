import React, { Component } from "react";
import { Link } from "react-router-dom";

import Navbar from "components/Navbar";

class Home extends Component {
  render() {
    return (
      <div className="container-fuild">
        <Navbar />
        <Link to="/catalogo">Ir a Catálogo</Link>
      </div>
    );
  }
}

export default Home;
