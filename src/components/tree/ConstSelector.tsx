import React, {ChangeEventHandler, Component} from 'react';

interface IProps {
  defaultValue: string
  changeHandler: ChangeEventHandler<HTMLSelectElement>
}

class ConstSelector extends Component<IProps, {}> {
  render() {
    return <select
      name="constant"
      defaultValue={this.props.defaultValue} onChange={this.props.changeHandler}
      className="form-select"
      style={{display: "inline-block", width: "auto"}}
    >
      <option value="true">true</option>
      <option value="false">false</option>
    </select>;
  }
}

export default ConstSelector;
