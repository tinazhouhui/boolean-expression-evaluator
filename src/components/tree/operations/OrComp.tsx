import React from 'react';
import {Or} from '../../../evaluator/operations/Or';
import NodeComp from '../NodeComp';

interface IProps {
  left: JSX.Element,
  right: JSX.Element,
  me: Or,
}

class OrComp extends NodeComp<IProps, {}> {
  render() {
    const {left, right} = this.props;
    return <>
      {this.renderRemove()}
      ( {left} OR {right} )
    </>;
  }
}

export default OrComp;
