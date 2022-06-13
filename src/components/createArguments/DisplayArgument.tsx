import React, {Component} from 'react';
import {Argument} from '../../evaluator/constants/Argument';

interface IProps {
  argument: Argument;
}

class DisplayArgument extends Component<IProps, {}> {
  render() {
    return (
      <>
        {this.props.argument.getName()}: {String(this.props.argument.getValue())}
      </>
    );
  }
}

export default DisplayArgument;
