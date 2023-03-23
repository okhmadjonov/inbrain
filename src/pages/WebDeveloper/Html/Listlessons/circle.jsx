import React from 'react';
import 'react-input-range/lib/css/index.css';
import InputRange from 'react-input-range';

class Circlepart extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value : 4}
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