import React from 'react';

interface IProps {
    left: JSX.Element | undefined,
    right: JSX.Element | undefined
}

function AndComp(props: IProps) {
    const {left, right} = props

    return (
        <div style={{display: 'inline'}} >( {left} AND {right} )</div>
    );
}

export default AndComp;
