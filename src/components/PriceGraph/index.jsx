/* eslint-disable react/no-multi-comp */
import React, { PureComponent } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import { calculatePriceAt, formatPrice } from "utils/price";

class CustomizedLabel extends PureComponent {
  render() {
    const { x, y, stroke, value } = this.props;

    return (
      <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">
        {formatPrice(value)}
      </text>
    );
  }
}

class CustomizedAxisTick extends PureComponent {
  render() {
    const { x, y, stroke, payload } = this.props;

    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={0}
          y={0}
          dy={16}
          textAnchor="end"
          fill="#666"
          transform="rotate(-35)"
        >
          {formatPrice(payload.value)}
        </text>
      </g>
    );
  }
}

class CustomizedMonthTick extends PureComponent {
  render() {
    const { x, y, stroke, payload } = this.props;

    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={0}
          y={0}
          dy={16}
          textAnchor="end"
          fill="#666"
          transform="rotate(-35)"
        >
          {payload.value}
        </text>
      </g>
    );
  }
}

export default class PriceGraph extends PureComponent {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/5br7g9d6/";

  getMonthAt(monthsInAdvance) {
    const months = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre"
    ];
    const month = (new Date().getMonth() + monthsInAdvance) % 12;
    return {
      name: months[month],
      Valor: calculatePriceAt({
        price: this.props.price,
        ROI: 18,
        atMonth: 0
      })
    };
  }

  data = [
    {
      name: "Junio",
      Valor: calculatePriceAt({ price: this.props.price, ROI: 18, atMonth: 0 })
    },
    {
      name: "Julio",
      Valor: calculatePriceAt({ price: this.props.price, ROI: 18, atMonth: 1 })
    },
    {
      name: "Agosto",
      Valor: calculatePriceAt({ price: this.props.price, ROI: 18, atMonth: 2 })
    },
    {
      name: "Septiembre",
      Valor: calculatePriceAt({ price: this.props.price, ROI: 18, atMonth: 3 })
    },
    {
      name: "Octubre",
      Valor: calculatePriceAt({ price: this.props.price, ROI: 18, atMonth: 4 })
    },
    {
      name: "Noviembre",
      Valor: calculatePriceAt({ price: this.props.price, ROI: 18, atMonth: 5 })
    },
    {
      name: "Diciembre",
      Valor: calculatePriceAt({ price: this.props.price, ROI: 18, atMonth: 6 })
    },
    {
      name: "Enero",
      Valor: calculatePriceAt({ price: this.props.price, ROI: 18, atMonth: 7 })
    },
    {
      name: "Febrero",
      Valor: calculatePriceAt({ price: this.props.price, ROI: 18, atMonth: 8 })
    },
    {
      name: "Marzo",
      Valor: calculatePriceAt({ price: this.props.price, ROI: 18, atMonth: 9 })
    },
    {
      name: "Abril",
      Valor: calculatePriceAt({ price: this.props.price, ROI: 18, atMonth: 10 })
    },
    {
      name: "Mayo",
      Valor: calculatePriceAt({ price: this.props.price, ROI: 18, atMonth: 11 })
    }
  ];

  render() {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={this.data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 10
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" height={60} tick={<CustomizedMonthTick />} />
          <YAxis tick={<CustomizedAxisTick />} />
          <Tooltip formatter={(value, name, props) => formatPrice(value)} />
          <Line
            type="monotone"
            dataKey="Valor"
            stroke="#8884d8"
            label={<CustomizedLabel />}
          />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
