import React, {Component} from 'react';

interface IProps {
  value: JSX.Element,
  name: string,
}

class ArgumentComp extends Component<IProps, any> {
  render() {
    return <>
      {this.props.value}
      <span className="badge bg-secondary">{this.props.name}</span>
    </>;
  }
}

export default ArgumentComp;
