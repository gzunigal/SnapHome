import React from "react";
import Navbar from "components/Navbar";

import image from "assets/lavadora.jpg";
import MisProductos from "components/MisProductos";

const MiSnapHome = () => {
  //const data = useFetch(`localhost:8000/productos/${match.params.id}`);

  return (
    <div className="container-fuild">
      <Navbar />
      <MisProductos />
    </div>
  );
};

export default MiSnapHome;
