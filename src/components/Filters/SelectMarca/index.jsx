import React from "react";
import Select from "react-select";

const marcas = [
  { value: "Xiaomi", label: "Xiaomi" },
  { value: "Mijia", label: "Mijia" }
];

class SelectMarca extends React.Component {
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
        Marca
        <Select
          value={selectedOption}
          onChange={this.handleChange}
          options={marcas}
        />
      </div>
    );
  }
}

export default SelectMarca;
