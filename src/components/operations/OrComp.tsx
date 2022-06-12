import React from 'react';

interface IProps {
  left: JSX.Element,
  right: JSX.Element
}

export class OrComp extends React.Component<IProps, any> {
  render() {
    const {left, right} = this.props;

    return (
      <span>( {left} OR {right} )</span>
    );
  }
}

export default OrComp;
