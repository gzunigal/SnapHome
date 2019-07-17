import React from "react";
import { Card, Row, Col, Button, ButtonGroup } from "reactstrap";
import { calculatePriceAt, formatPrice } from "utils/price";

import styles from "./index.module.css";
import image from "assets/lavadora.jpg";

const ProductCard = ({ product, onClickNew, adquirido }) => {
  const priceNew = calculatePriceAt({
    price: product.precio,
    ROI: product.payback
  });
  const priceFrom = calculatePriceAt({
    price: product.precio,
    ROI: product.payback,
    atMonth: 18
  });

  return (
    <div className={styles.card}>
      <Card className={styles.card_top}>
        <a href={`/producto/${product.id}`}>
          <Row>
            <Col className={styles.foto}>
              <img src={product.img} alt="Referencia" />
            </Col>
          </Row>
        </a>
      </Card>
      <Row>
        <ButtonGroup className={`col col-md-12`}>
          <Button
            className={`col col-md-6 ${styles.button} ${styles.normal}`}
            color="success"
            onClick={() => {
              !adquirido && onClickNew(product);
            }}
          >
            {adquirido && <div className={styles.text}>Actualizar</div>}
            {!adquirido && (
              <span>
                <div className={styles.pricename}>NUEVO</div>
                <div className={styles.price}>{formatPrice(priceNew)}</div>
              </span>
            )}
          </Button>
          <Button
            className={`col col-md-6 ${styles.button} ${styles.desde}`}
            color={adquirido ? "warning" : "info"}
            href={`/producto/${product.id}`}
          >
            {adquirido && <div className={styles.text}>Reportar Falla</div>}
            {!adquirido && (
              <span>
                <div className={styles.pricename}>DESDE</div>
                <div className={styles.price}>{formatPrice(priceFrom)}</div>
              </span>
            )}
          </Button>
        </ButtonGroup>
      </Row>
    </div>
  );
};

export default ProductCard;
