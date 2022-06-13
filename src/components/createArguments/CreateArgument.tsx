import React, {Component} from 'react';
import {IArgument} from '../../App';
import AllArguments from './components/AllArguments';
import AddArgumentForm from './components/AddArgumentForm';
import {Argument} from '../../evaluator/constants/Argument';

interface IProps {
  allArgs: Argument[],
  handleNewArg: (newArg: IArgument) => void,
}

class CreateArgument extends Component<IProps, {}> {

  state = {
    showForm: false,
  };

  render() {
    const numberOfArgs = this.props.allArgs.length;
    return <>
      {numberOfArgs > 0 && <AllArguments allArguments={this.props.allArgs}/>}
      {this.state.showForm ? <AddArgumentForm{...this.props}/> :
        <button onClick={() => this.setState({showForm: true})} className="btn btn-secondary my-3">Add a new
          argument</button>}
    </>;
  }
}

export default CreateArgument;
