import React, {Component} from 'react';
import 'react-input-range/lib/css/index.css';
import InputRange from 'react-input-range';

const Circlepart = () => {

    return (
      <InputRange
        maxValue={11}
        value={this.state.value}
        onChange={value => this.setState({ value })} />
    );
  
}

export default Circlepart;
