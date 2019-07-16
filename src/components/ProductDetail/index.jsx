import React, { useState } from "react";
import { Card, Button, ButtonGroup } from "reactstrap";
import { calculatePriceAt, formatPrice } from "utils/price";
import ConfirmationModal from "components/ConfirmationModal";

import styles from "./index.module.css";

const ProductDetail = ({ product }) => {
  const priceNew = calculatePriceAt({
    price: product.precio,
    ROI: product.payback
  });
  const priceFrom = calculatePriceAt({
    price: product.precio,
    ROI: product.payback,
    atMonth: 18
  });

  const [modal, setModal] = useState({ price: 0, isOpen: false });

  const toggleModal = () => {
    setModal({ ...modal, isOpen: !modal.isOpen });
  };
  const openModal = product => {
    setModal({ product, isOpen: true });
  };

  const listaCaracteristicas = product.caracteristicas.map(feature => {
    return (
      <tr className="row">
        <td className="col-5">
          <strong>{feature.key}</strong>
        </td>
        <td className="col-7">{feature.value}</td>
      </tr>
    );
  });

  return (
    <div className="component">
      <br />
      <h1 className="text-center">{product.nombre}</h1>
      <hr className="col-8 offset-2" />
      <br />
      <div className="row">
        <div className="col-4">
          <Card className={styles.card_top}>
            <div className="row">
              <div className={`col ${styles.foto}`}>
                <img src={product.img} alt="Referencia" />
              </div>
            </div>
          </Card>
          <div className="row">
            <ButtonGroup className={`col col-md-12`}>
              <Button
                className={`col col-md-6 ${styles.button} ${styles.normal}`}
                color="success"
                onClick={() => {
                  openModal(product);
                }}
              >
                <div className={styles.pricename}>NUEVO</div>
                <div className={styles.price}>{formatPrice(priceNew)}</div>
              </Button>
              <Button
                className={`col col-md-6 ${styles.button} ${styles.desde}`}
                color="info"
                href={`/producto/${product.id}`}
              >
                <div className={styles.pricename}>DESDE</div>
                <div className={styles.price}>{formatPrice(priceFrom)}</div>
              </Button>
            </ButtonGroup>
          </div>
        </div>
        <div className="col-md-7">
          <div className="row">
            <div className="col">{product.descripcion}</div>
          </div>
          <hr className="col-8 offset-2" />
          <div className="row">
            <div className="col col-md-12">
              <h3>Características</h3>
            </div>
          </div>
          <table className="col-12">{listaCaracteristicas}</table>
        </div>
      </div>
      <hr className="col-8 offset-2" />
      <div className="row">
        <div className={`col ${styles.centerContent}`}>
          <h3>Otras Opciones</h3>
        </div>
      </div>

      <ConfirmationModal
        isOpen={modal.isOpen}
        product={modal.product}
        toggle={toggleModal}
      />
    </div>
  );
};

export default ProductDetail;
