import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import PriceGraph from "components/PriceGraph";

class ConfirmationModal extends React.Component {
  render() {
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
              <div className="col-5">
                <PriceGraph price={this.props.price} />
              </div>
              <div className="col-7">
                <div className="row">
                  <h3>Nombre Producto</h3>
                </div>
                <div className="row">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                  ratione vitae autem quia, ipsum rem accusantium sint facilis
                  ea aliquam est dignissimos, voluptatum cum, officia quibusdam.
                  Tenetur minus assumenda aspernatur?
                </div>
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
