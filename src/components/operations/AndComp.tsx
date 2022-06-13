import React from 'react';
import {And} from '../../evaluator/operations/And';
import NodeComp from '../NodeComp';

interface IProps {
  left: JSX.Element,
  right: JSX.Element,
  me: And
}

class AndComp extends NodeComp<IProps, {}> {
  render() {
    const {left, right} = this.props;
    return <>
      {this.renderRemove()}
      ( {left} AND {right} )
    </>;
  }
}

export default AndComp;
