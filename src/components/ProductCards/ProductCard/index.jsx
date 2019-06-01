import React from "react";
import { Card, Row, Col, Button, ButtonGroup } from "reactstrap";
import { calculatePriceAt, formatPrice } from "utils/price";

import styles from "./index.module.css";
import image from "assets/lavadora.jpg";

const ProductCard = ({ price, onClickNew }) => {
  const priceNew = calculatePriceAt({ price, ROI: 18 });
  const priceFrom = calculatePriceAt({ price, ROI: 18, atMonth: 18 });

  return (
    <div className={styles.card}>
      <Card className={styles.card_top}>
        <Row>
          <Col className={styles.foto}>
            <img src={image} alt="Referencia" />
          </Col>
        </Row>
      </Card>
      <Row>
        <ButtonGroup className={`col col-md-12`}>
          <Button
            className={`col col-md-6 ${styles.button} ${styles.normal}`}
            color="success"
            onClick={() => {
              onClickNew(price);
            }}
          >
            <div className={styles.pricename}>NUEVO</div>
            <div className={styles.price}>{formatPrice(priceNew)}</div>
          </Button>
          <Button
            className={`col col-md-6 ${styles.button} ${styles.desde}`}
            color="info"
          >
            <div className={styles.pricename}>DESDE</div>
            <div className={styles.price}>{formatPrice(priceFrom)}</div>
          </Button>
        </ButtonGroup>
      </Row>
    </div>
  );
};

export default ProductCard;
