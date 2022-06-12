import React from 'react';

interface IProps {
  value: JSX.Element,
  name: string,
}

function ArgumentComp(props: IProps) {

  return <>
    {props.value}
    <span className="badge bg-secondary">{props.name}</span>
  </>;
}

export default ArgumentComp;
