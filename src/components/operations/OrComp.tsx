import React from 'react';

interface IProps {
  left: JSX.Element,
  right: JSX.Element
}

function AndComp(props: IProps) {
  const {left, right} = props;

  return (
    <span>( {left} OR {right} )</span>
  );
}

export default AndComp;
