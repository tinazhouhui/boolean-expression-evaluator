import React from 'react';
import {IArgument} from '../App';

const initialState = {
  showForm: false,
  argument: {
    name: 'myArg',
    value: true
  }
};

interface IProps {
  allArgs: IArgument[],
  handleChange: (name: string, value: string) => void,
  handleNewArg: (newArg: IArgument) => void,
}

export default class CreateArgument extends React.Component<IProps, any> {

  state = initialState;
  arguments = [{
    name: 'arg1',
    value: true,
  }, {
    name: 'arg2',
    value: false
  }];

  handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
    this.props.handleNewArg(this.state.argument);
  }

  handeFormChange = (event: any) => {
    this.setState((prevState: any) => {
      return {
        argument: {
          ...prevState.argument,
          [event.target.name]: event.target.value
        }
      };
    });
  };

  handleDelete = (name: string) => {
    const droppedArgs = this.props.allArgs.filter((arg: any) => arg.name !== name)
    this.setState({
      allArgs: droppedArgs
    })
  }

  showSelector = (name: string, value: boolean) => {
    return (
      <p key={name}>
        {name}
        <select name="constant" defaultValue={String(value)} onChange={(event) => {this.props.handleChange(name, String(event.target.value))}}
                className="form-select"
                style={{display: "inline-block", width: "auto"}}>
          <option value="true">true</option>
          <option value="false">false</option>
        </select>
        <button onClick={() => this.handleDelete(name)}>x</button>
      </p>

    );
  };

  render() {
    return <>
      <h2>Arguments</h2>
      {this.props.allArgs.map((arg: any) => this.showSelector(arg.name, arg.value))}
      {this.state.showForm ? <form onSubmit={this.handleSubmit}>
        <label>
          Argument name:
          <input type="text" name="name" value={this.state.argument.name} onChange={this.handeFormChange}/>
        </label>
        <select name="value" defaultValue={String(this.state.argument.value)} onChange={this.handeFormChange}
                className="form-select"
                style={{display: "inline-block", width: "auto"}}>
          <option value="true">true</option>
          <option value="false">false</option>
        </select>
        <input type="submit" value="submit"/>
      </form> : <button onClick={() => this.setState({showForm: true})} className="btn btn-secondary">Add a new argument</button>}
    </>;
  }
}
