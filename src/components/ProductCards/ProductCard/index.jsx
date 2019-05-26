import React from "react";
import { Card, Row, Col, Button, ButtonGroup } from "reactstrap";

import styles from "./index.module.css";
import image from "../../../static/lavadora.jpg";

const ProductCard = () => (
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
        >
          <div className={styles.pricename}>NUEVO</div>
          <div className={styles.price}>$21.000</div>
        </Button>
        <Button
          className={`col col-md-6 ${styles.button} ${styles.desde}`}
          color="info"
        >
          <div className={styles.pricename}>DESDE</div>
          <div className={styles.price}>$9.000</div>
        </Button>
      </ButtonGroup>
    </Row>
  </div>
);

export default ProductCard;
