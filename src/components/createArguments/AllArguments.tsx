import React, {Component} from 'react';
import {IArgument} from '../../App';
import Argument from './Argument';

interface IProps {
  allArguments: IArgument[]
}

class AllArguments extends Component<IProps, any> {


  render() {
    return (
      <div className="my-3">
        <h3>All Arguments</h3>
        {this.props.allArguments.map((arg: IArgument) => <Argument key={arg.name} argument={arg}/>)}
      </div>
    );
  }
}

export default AllArguments;
