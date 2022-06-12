import React from 'react';
import {And} from '../../evaluator/operations/And';

interface IProps {
  left: JSX.Element,
  right: JSX.Element,
  me: And
}

function AndComp(props: IProps) {
  const {left, right} = props;

  //console.log(props.me);

  return (
    <span>( {left} AND {right} )</span>
  );
}

export default AndComp;
