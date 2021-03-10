import React from 'react';
import CarsContext from './CarsContext';

class CarsProvider extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      }
    }
    this.moveCar = this.moveCar.bind(this);
  }

  moveCar(color, side) {
    this.setState({
      cars: {
        ...this.state.cars,
        [color]: side,
      }
    });
  }

  render() {
    const context = {
      ...this.state,
      moveCar: this.moveCar,
    };
    const { children } = this.props;
    return(
      <CarsContext.Provider value={ context }>
        {children}
      </CarsContext.Provider>
    );
  }
}

export default CarsProvider;
