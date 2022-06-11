import React, {useState} from 'react';
import {AND, ARGUMENT, CONSTANT, OR} from '../constants';
import {THandleChange} from '../evaluator/Undefined';

interface IProps {
  handleChange: THandleChange,
}

function AddNode(props: IProps) {

  const {handleChange} = props;
  const selector: JSX.Element = (
    <>
      <button onClick={() => setIsFolded(false)}>x</button>
      <select defaultValue="select" onChange={handleChange}>
        <option disabled={true} value="select">Select...</option>
        <optgroup label="Values">
          <option value={CONSTANT}>Constant</option>
          <option value={ARGUMENT}>Argument</option>
        </optgroup>
        <optgroup label="Operations">
          <option value={AND}>And</option>
          <option value={OR}>Or</option>
        </optgroup>
      </select>
    </>
  );

  const [isFolded, setIsFolded] = useState(false);

  return (
    <div style={{display: 'inline'}}>
      {isFolded ? selector :
        <button onClick={() => setIsFolded(true)}>+</button>}
    </div>
  );
}

export default AddNode;
