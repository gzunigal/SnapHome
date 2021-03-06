import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button
} from "reactstrap";

import styles from "./index.module.css";
import logo from "assets/snaphomeLogo.png";
import Categories from "components/Categories";

const TopNavbar = () => (
  <Navbar className={`row ${styles.navBar}`} expand="md">
    <a href="/" className={styles.logoContainer}>
      <img className={styles.logo} src={logo} alt="Logo" />
      <p className={styles.name}>SnapHome</p>
    </a>
    <Nav className={`${styles.categories} ml-auto`}>
      <Categories />
    </Nav>
    <Nav>
      <Button href="/misnaphome" color="info">
        <span className={styles.miHome}>Mi SnapHome</span>
      </Button>
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle className={styles.dropdown} nav caret>
          <FontAwesomeIcon className={styles.iconUser} icon={faUserCircle} />
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem>Ver perfil</DropdownItem>
          <DropdownItem>Facturación</DropdownItem>
          <DropdownItem>Configuración</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Salir</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </Nav>
  </Navbar>
);
export default TopNavbar;
