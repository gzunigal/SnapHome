import React from "react";

import Navbar from "./Navbar";

const LandingPage = props => {
  return (
    <div className="component row">
      <div className="col-12">
        <Navbar />
      </div>
      <div className="col-12">Big landing</div>
      <div className="col-12">Caracteristicas</div>
      <div className="col-12">call to action</div>
    </div>
  );
};

export default LandingPage;
