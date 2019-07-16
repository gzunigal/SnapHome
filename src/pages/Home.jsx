import React, { Component } from "react";
import { Link } from "react-router-dom";

import Navbar from "components/Navbar";
import Landing from 'components/Landing'

class Home extends Component {
  render() {
    return (
      <div className="container-fuild">
        <Landing />
      </div>
    );
  }
}

export default Home;
