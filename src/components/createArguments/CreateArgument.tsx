import React from 'react';
import {IArgument} from '../../App';
import AllArguments from './AllArguments';
import AddArgumentForm from './AddArgumentForm';

interface IProps {
  allArgs: IArgument[],
  handleChange: (name: string, value: string) => void,
  handleNewArg: (newArg: IArgument) => void,
}

export default class CreateArgument extends React.Component<IProps, any> {

  state = {
    showForm: false,
  };

  render() {
    const numberOfArgs = this.props.allArgs.length
    return <>
      {numberOfArgs > 0 && <AllArguments allArguments={this.props.allArgs}/>}
      {this.state.showForm ? <AddArgumentForm{...this.props}/> : <button onClick={() => this.setState({showForm: true})} className="btn btn-secondary my-3">Add a new argument</button>}
    </>;
  }
}
