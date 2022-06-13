import React, {ChangeEventHandler, Component} from 'react';
import {AND, ARGUMENT, CONSTANT, OR} from '../../../constants';

interface IProps {
  handler: ChangeEventHandler<HTMLSelectElement>
}

class Selector extends Component<IProps, {}> {
  render() {
    return <select
      defaultValue="select"
      onChange={this.props.handler}
      className="form-select"

      style={{display: "inline-block", width: "auto"}}
    >
      <option disabled={true} value="select">Select...</option>
      <optgroup label="Values">
        <option value={CONSTANT}>Constant</option>
        <option value={ARGUMENT}>Argument</option>
      </optgroup>
      <optgroup label="Operations">
        <option value={AND}>And</option>
        <option value={OR}>Or</option>
      </optgroup>
    </select>;
  }
}

export default Selector;
