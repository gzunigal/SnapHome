import React from "react";
import Select from "react-select";

const marcas = [
  { value: "Bluetooth", label: "Bluetooth" },
  { value: "Wifi 2.5", label: "Wifi 2.5" },
  { value: "Wifi 5.0", label: "Wifi 5.0" },
  { value: "Zigbee", label: "Zigbee" },
  { value: "Z-Wave", label: "Z-Wave" }
];

class SelectConectividad extends React.Component {
  state = {
    selectedOption: null
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption });
  };
  render() {
    const { selectedOption } = this.state;

    return (
      <div>
        Conectividad
        <Select
          value={selectedOption}
          onChange={this.handleChange}
          options={marcas}
        />
      </div>
    );
  }
}

export default SelectConectividad;
