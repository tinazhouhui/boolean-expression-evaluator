import React, {ChangeEventHandler, MouseEventHandler, useContext} from 'react';
import {ThemeContext} from '../../context';
import {Constant} from '../../evaluator/constants/Constant';

type Props = {
  me: Constant,
}

function ConstantComp(props: Props): JSX.Element {
  const {treeState, setTreeState} = useContext(ThemeContext);

  const removeHandler: MouseEventHandler<HTMLButtonElement> = (event) => {
    // ToDo: Remove
    console.warn('remove not implemented yet');

    const copy = Object.assign(Object.create(Object.getPrototypeOf(treeState)), treeState);
    setTreeState(copy);
  };

  const changeHandler: ChangeEventHandler<HTMLSelectElement> = (event) => {
    props.me.setValue(event.target.value === 'true');

    const copy = Object.assign(Object.create(Object.getPrototypeOf(treeState)), treeState);
    setTreeState(copy);
  };

  const constSelector = (
    <select name="constant" defaultValue={String(props.me.evaluate())} onChange={changeHandler} className="form-select" style={{ display: "inline-block", width: "auto"}}>
      <option value="true">true</option>
      <option value="false">false</option>
    </select>
  );

  return (
    <span>
      <button onClick={removeHandler} className="btn btn-danger btn-sm">x</button>
      {constSelector}
    </span>
  );
}

export default ConstantComp;
