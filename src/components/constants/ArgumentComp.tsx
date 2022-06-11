import React from 'react';

interface IProps {
    value: JSX.Element,
    name: string,
}

function ArgumentComp(props: IProps) {

    return (
        <div style={{display: 'inline'}}>{props.name} {props.value}</div>
    );
}

export default ArgumentComp;
