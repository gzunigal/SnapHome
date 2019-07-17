import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import PriceGraph from "components/PriceGraph";

class ConfirmationModal extends React.Component {
  render() {
    const { product } = this.props;
    return (
      <div>
        <Modal
          isOpen={this.props.isOpen}
          toggle={this.props.toggle}
          className={this.props.className}
          size="lg"
          style={{ maxWidth: "1600px", width: "70%" }}
        >
          <ModalHeader toggle={this.props.toggle}>
            Solicitar Producto
          </ModalHeader>
          <ModalBody>
            <div className="row">
              <div className="col-12">
                <div className="row">
                  <h3 className="col-12 text-center">
                    {product && product.nombre}
                  </h3>
                </div>
              </div>
              <div className="col-12">
                <PriceGraph product={product} />
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.props.toggle}>
              Solicitar!
            </Button>{" "}
            <Button color="secondary" onClick={this.props.toggle}>
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ConfirmationModal;
