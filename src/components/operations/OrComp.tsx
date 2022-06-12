import React, {Component} from 'react';

interface IProps {
  left: JSX.Element,
  right: JSX.Element
}

class OrComp extends Component<IProps, any> {
  render() {
    const {left, right} = this.props;

    return (
      <span>( {left} OR {right} )</span>
    );
  }
}

export default OrComp;
