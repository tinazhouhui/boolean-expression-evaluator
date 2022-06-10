import React from 'react';

function ArgumentComp(props: {
    value: JSX.Element,
    name: string,
}) {

    const {name, value} = props
    return (
        <div style={{display: 'inline'}} >{name}: {value}</div>
    );
}

export default ArgumentComp;
