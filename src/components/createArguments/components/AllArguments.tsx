import React, {Component} from 'react';
import {Argument} from '../../../evaluator/constants/Argument';
import DisplayArgument from './DisplayArgument';


interface IProps {
   allArguments: Argument[];
}

class AllArguments extends Component<IProps, {}> {
  render() {
    return (
      <div className="my-3">
        <h3>All Arguments</h3>
        {this.props.allArguments.map((arg: Argument) => <DisplayArgument key={arg.getName()} argument={arg}/>)}
      </div>
    );
  }
}

export default AllArguments;
