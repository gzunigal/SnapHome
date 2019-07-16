import React, { useState } from "react";
import ProductCard from "./ProductCard";

import styles from "./index.module.css";
import ConfirmationModal from "components/ConfirmationModal";

const ProductCards = ({ products }) => {
  const [modal, setModal] = useState({ price: 0, isOpen: false });

  const toggleModal = () => {
    setModal({ ...modal, isOpen: !modal.isOpen });
  };
  const openModal = product => {
    setModal({ product, isOpen: true });
  };

  return (
    <div className={styles.container}>
      {products.map(product => (
        <ProductCard product={product} onClickNew={openModal} />
      ))}
      <ConfirmationModal
        isOpen={modal.isOpen}
        product={modal.product}
        toggle={toggleModal}
      />
    </div>
  );
};
export default ProductCards;
