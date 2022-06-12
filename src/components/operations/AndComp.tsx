import React, {Component} from 'react';
import {And} from '../../evaluator/operations/And';

interface IProps {
  left: JSX.Element,
  right: JSX.Element,
  me: And
}

class AndComp extends Component<IProps, any> {

  render() {
    const {left, right} = this.props;
    return (
      <span>( {left} AND {right} )</span>
    );
  }
}

export default AndComp;
