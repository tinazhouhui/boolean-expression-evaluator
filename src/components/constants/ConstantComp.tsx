import React from 'react';

function ConstantComp(value: boolean): JSX.Element {
    return (
        <div style={{display: 'inline'}}>
            <select name="constant" id="constant">
                <option value="true" selected={value}>true</option>
                <option value="false" selected={!value}>false</option>
            </select>
        </div>
    );
}

export default ConstantComp;
