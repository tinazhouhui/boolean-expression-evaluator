import React, {useState} from 'react';
import AddNode from '../AddNode';

function ConstantComp(value: boolean | undefined): JSX.Element {
    const constSelector = (
        <select name="constant" id="constant" defaultValue={String(value)}>
            <option value="true" >true</option>
            <option value="false" >false</option>
        </select>
    )

    console.log('ConstantComp', value)

    return (
        <div style={{display: 'inline'}}>
            {value !== undefined ? constSelector : <AddNode/> }
        </div>
    );
}

export default ConstantComp;
