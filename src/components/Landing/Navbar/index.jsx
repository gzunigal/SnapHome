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
  DropdownItem
} from "reactstrap";

import styles from "./index.module.css";
import logo from "assets/snaphomeLogo.png";

const TopNavbar = () => (
  <Navbar className={styles.navBar} expand="md">
    <a href="/">
      <img className={styles.logo} src={logo} alt="Logo" />
      <p className={styles.name}>SnapHome</p>
    </a>
    <Nav className={`${styles.nav} ml-auto`}>
      <NavItem>
        <NavLink href="/catalogo/">Catálogo</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/catalogo">Destacados</NavLink>
      </NavItem>
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
