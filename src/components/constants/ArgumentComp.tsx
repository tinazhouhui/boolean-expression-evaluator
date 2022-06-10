import React from 'react';

interface IProps {
    value: JSX.Element | undefined,
    name: string | undefined,
}

function ArgumentComp(props: IProps) {

    return (
        <div style={{display: 'inline'}}>{props.name} {props.value}</div>
    );
}

export default ArgumentComp;
