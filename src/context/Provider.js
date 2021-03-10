import React from 'react';
import Context from './Context';

class Provider extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
      signal: {
        color: 'red',
      }
    }
    this.moveCar = this.moveCar.bind(this);
    this.changeSignal = this.changeSignal.bind(this);
  }

  moveCar(car, side) {
    this.setState({
      ...this.state,
      cars: {[car]: side,}
    });
  }

  changeSignal(newColor) {
    this.setState({
      ...this.state,
      signal: {color: newColor}
    });
  }

  render() {
    const context = {
      ...this.state,
      changeSignal: this.changeSignal,
      moveCar: this.moveCar,
    }
    const { children } = this.props;
    return(
      <Context.Provider value={context}>
        {children}
      </Context.Provider>
    );
  }
}

export default Provider;
