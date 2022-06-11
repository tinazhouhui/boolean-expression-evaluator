import React from 'react';

interface IProps {
  left: JSX.Element,
  right: JSX.Element,
}

function AndComp(props: IProps) {
  const {left, right} = props;

  return (
    <div style={{display: 'inline'}}>( {left} AND {right} )</div>
  );
}

export default AndComp;
