<<<<<<< HEAD
import React from 'react';
import 'react-input-range/lib/css/index.css';
import InputRange from 'react-input-range';
=======
import React, { useState } from "react";
import "./Listlesson.scss";
import CircleSlider from "./CircleSlider";
const Circlepart = () => {
  const [count, setCount] = useState(1);
>>>>>>> e0823ed109334f8a14f39a95c6c6de0743de3d8c

class Circlepart extends React.Component {
  constructor(props) {
    super(props);

<<<<<<< HEAD
    this.state = { value : 4}
=======
  switch (count) {
    case 1:
      step1 = true;
      break;
    case 2:
      step2 = true;
      break;
    case 3:
      step3 = true;
      break;
    case 4:
      step4 = true;
      break;
    case 5:
      step5 = true;
      break;
    case 6:
      step6 = true;
      break;

    case 7:
      step7 = true;
      break;

    case 8:
      step8 = true;
      break;
    case 9:
      step9 = true;
      break;
    case 10:
      step10 = true;
      break;
    case 11:
      step11 = true;
      break;
    default:
      step1 = true;
>>>>>>> e0823ed109334f8a14f39a95c6c6de0743de3d8c
  }

  render() {
    return (
      <InputRange
        maxValue={11}
        value={this.state.value}
        onChange={value => this.setState({ value })} />
    );
  }
}

export default Circlepart;
