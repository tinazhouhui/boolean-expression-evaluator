import React, {Component} from 'react';
import {IArgument} from '../../../App';
import {Argument} from '../../../evaluator/constants/Argument';

interface IProps {
  allArgs: Argument[],
  handleNewArg: (newArg: IArgument) => void,
}

interface IState {
  argument: IArgument,
}

class AddArgumentForm extends Component<IProps, IState> {
  state = {
    argument: {
      name: 'myArg',
      value: true
    }
  };

  handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    this.props.handleNewArg(this.state.argument);
  };

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

  render() {
    return (
      <form className="my-3" onSubmit={this.handleSubmit}>
        <label className="form-label">
          Argument name:
           <input
            className="form-control"
            type="text" name="name"
            value={this.state.argument.name}
            onChange={this.handeFormChange}
          />
        </label>
        <select
          name="value"
          defaultValue={String(this.state.argument.value)} onChange={this.handeFormChange}
          className="form-select"
          style={{display: "inline-block", width: "auto"}}
        >
          <option value="true">true</option>
          <option value="false">false</option>
        </select>
        <input type="submit" value="submit" className="btn btn-success"/>
      </form>
    );
  }
}

export default AddArgumentForm;
