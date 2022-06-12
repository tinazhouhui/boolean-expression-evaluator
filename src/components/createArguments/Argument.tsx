import React, {Component} from 'react';
import {IArgument} from '../../App';

interface IProps {
  argument: IArgument
}

class Argument extends Component<IProps, any> {
  render() {
    return (
      <div>
        {this.props.argument.name}: {String(this.props.argument.value)}
      </div>
    );
  }
}

export default Argument;
