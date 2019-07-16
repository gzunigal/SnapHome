import React from "react";
import Navbar from "components/Navbar";
import { useFetch } from "utils/customHooks";

import image from "assets/lavadora.jpg";

const MisProductos = ({ match }) => {
  //const data = useFetch(`localhost:8000/productos/${match.params.id}`);

  return (
    <div className="container-fuild">
      <Navbar />
      <h1>{match.params.id}</h1>
      <div className="row">
        <div className="col-md-5">
          <div className="">
            <img src={image} alt="Referencia" />
          </div>
          precio 1 - precio 2
        </div>
        <div className="col-md-7">
          <div className="row">
            <div className="col-12">Titulo</div>
          </div>
          <div className="row">
            <div className="col-12">Descripcion</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MisProductos;
