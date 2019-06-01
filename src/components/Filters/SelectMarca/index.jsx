import React from "react";
import Select from "react-select";

const marcas = [
  { value: "Samsung", label: "Samsung" },
  { value: "Xiami", label: "Xiaomi" },
  { value: "LG", label: "LG" }
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
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={marcas}
      />
    );
  }
}

export default SelectMarca;
