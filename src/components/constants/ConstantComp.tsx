import React from 'react';

function ConstantComp(value: boolean): JSX.Element {
  const constSelector = (
    <select name="constant" id="constant" defaultValue={String(value)}>
      <option value="true">true</option>
      <option value="false">false</option>
    </select>
  );

  return (
    <div style={{display: 'inline'}}>
      {constSelector}
    </div>
  );
}

export default ConstantComp;
