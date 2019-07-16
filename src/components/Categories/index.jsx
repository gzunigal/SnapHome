import React from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

import styles from "./index.module.css";

export default class Categories extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <div className={styles.Categories}>
        <Dropdown
          className={styles.button}
          isOpen={this.state.dropdownOpen}
          toggle={this.toggle}
        >
          <DropdownToggle caret className={styles.blanco}>Destacados</DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Electrodomésticos</DropdownItem>
            <DropdownItem>Seguridad</DropdownItem>
            <DropdownItem>Iluminación</DropdownItem>
            <DropdownItem>Asistentes</DropdownItem>
            <DropdownItem>Televisores</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}
