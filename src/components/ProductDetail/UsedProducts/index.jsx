import React from "react";
import { Button } from "reactstrap";
import { calculatePriceAt, formatPrice } from "utils/price";

import styles from "./index.module.css";

const UsedProducts = ({ product }) => {
  const n_productos = Math.floor(Math.random() * 10) + 1;

  const productos = [...Array(n_productos).keys()].map(i => {
    const detalles = {
      uso: Math.floor(Math.random() * 6) + 1,
      rayon: Math.random(),
      golpe: Math.random(),
      pintura: Math.random(),
      pieza_faltante: Math.random(),
      refaccionado: Math.random()
    };

    const precio =
      product.precio *
      (1 -
        (detalles.uso +
          detalles.rayon +
          detalles.golpe +
          detalles.pintura +
          detalles.pieza_faltante +
          detalles.refaccionado) /
          18);

    return (
      <div className={`row ${styles.card}`}>
        <div className="col-4 text-center">
          Tiempo de uso <br />
          {detalles.uso} Meses
        </div>
        <div className="col-4">
          <ul>
            {detalles.rayon < 0.3 && <li>Raya pequeña</li>}
            {detalles.golpe < 0.3 && <li>Golpe</li>}
            {detalles.pintura < 0.3 && <li>Pintura deteriorada</li>}
            {detalles.pieza_faltante < 0.3 && <li>Pieza faltante</li>}
            {detalles.refaccionado < 0.3 && <li>Refaccionado</li>}
          </ul>
        </div>
        <div className="col-4 text-center">
          <Button
            className={`col col-md-6 offset-3`}
            color="info"
            href={`/catalogo`}
          >
            Solicitar por <br />
            {formatPrice(
              calculatePriceAt({
                price: precio,
                ROI: product.payback,
                atMonth: 0
              })
            )}
          </Button>
        </div>
      </div>
    );
  });

  return <div>{productos}</div>;
};
export default UsedProducts;
