import React from 'react';
import {And} from '../../evaluator/operations/And';

interface IProps {
  left: JSX.Element,
  right: JSX.Element,
  me: And
}

export class AndComp extends React.Component<IProps, any> {

  //console.log(props.me);

  render() {
    const {left, right} = this.props;
    return (
      <span>( {left} AND {right} )</span>
    );
  }
}

export default AndComp;
