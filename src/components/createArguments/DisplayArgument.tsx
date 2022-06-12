import React, {Component} from 'react';
import {Argument} from '../../evaluator/constants/Argument';

interface IProps {
  argument: Argument
}

class DisplayArgument extends Component<IProps, any> {
  render() {
    return (
      <div>
        {this.props.argument.getName()}: {String(this.props.argument.getValue())}
      </div>
    );
  }
}

export default DisplayArgument;
