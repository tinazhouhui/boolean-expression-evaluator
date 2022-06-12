import React from 'react';

interface IProps {
  value: JSX.Element,
  name: string,
}

export class ArgumentComp extends React.Component<IProps, any> {
  render() {
    return <>
      {this.props.value}
      <span className="badge bg-secondary">{this.props.name}</span>
    </>;
  }
}

export default ArgumentComp;
