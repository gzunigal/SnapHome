import React, { useState } from "react";
import ProductCard from "./ProductCard";

import styles from "./index.module.css";
import ConfirmationModal from "components/ConfirmationModal";

const ProductCards = () => {
  const [modal, setModal] = useState({ price: 0, isOpen: false });

  const toggleModal = () => {
    setModal({ ...modal, isOpen: !modal.isOpen });
  };
  const openModal = value => {
    setModal({ price: value, isOpen: true });
  };

  return (
    <div className={styles.container}>
      <ProductCard price={450000} onClickNew={openModal} />
      <ProductCard price={450000} onClickNew={openModal} />
      <ProductCard price={450000} onClickNew={openModal} />
      <ProductCard price={450000} onClickNew={openModal} />
      <ProductCard price={450000} onClickNew={openModal} />
      <ProductCard price={450000} onClickNew={openModal} />
      <ProductCard price={450000} onClickNew={openModal} />
      <ProductCard price={450000} onClickNew={openModal} />
      <ProductCard price={450000} onClickNew={openModal} />
      <ProductCard price={450000} onClickNew={openModal} />
      <ProductCard price={450000} onClickNew={openModal} />
      <ProductCard price={450000} onClickNew={openModal} />
      <ProductCard price={450000} onClickNew={openModal} />
      <ProductCard price={450000} onClickNew={openModal} />
      <ProductCard price={450000} onClickNew={openModal} />
      <ConfirmationModal
        isOpen={modal.isOpen}
        price={modal.price}
        toggle={toggleModal}
      />
    </div>
  );
};
export default ProductCards;
