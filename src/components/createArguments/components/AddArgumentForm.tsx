import React, {Component} from 'react';
import {IArgument} from '../../../App';
import {Argument} from '../../../evaluator/constants/Argument';
import ConstSelector from '../../ConstSelector';

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

  handeFormChange: React.ChangeEventHandler<HTMLSelectElement | HTMLInputElement> = (event) => {
    this.setState((prevState: IState) => {
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
        <ConstSelector defaultValue={String(this.state.argument.value)} changeHandler={this.handeFormChange}/>
        <input type="submit" value="submit" className="btn btn-success"/>
      </form>
    );
  }
}

export default AddArgumentForm;
