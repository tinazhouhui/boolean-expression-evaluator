import React, {ChangeEventHandler, Context, MouseEventHandler, useContext} from 'react';

import {Constant} from '../../evaluator/constants/Constant';
import {IThemeContext, ThemeContext} from '../../contextIndex';

type Props = {
  me: Constant,
}

export class ConstantComp extends React.Component<Props, any> {
  // const {treeState, setTreeState} = useContext(ThemeContext);
  static contextType: Context<IThemeContext> = ThemeContext;

  removeHandler: MouseEventHandler<HTMLButtonElement> = (event) => {
    const {treeState, setTreeState} = this.context as any;
    // ToDo: Remove
    console.warn('remove not implemented yet');

    const copy = Object.assign(Object.create(Object.getPrototypeOf(treeState)), treeState);
    setTreeState(copy);
  };

  changeHandler: ChangeEventHandler<HTMLSelectElement> = (event) => {
    const {treeState, setTreeState} = this.context as any;
    this.props.me.setValue(event.target.value === 'true');

    const copy = Object.assign(Object.create(Object.getPrototypeOf(treeState)), treeState);
    setTreeState(copy);
  };

  private readonly constSelector: JSX.Element = (
    <select name="constant" defaultValue={String(this.props.me.evaluate())} onChange={this.changeHandler}
            className="form-select"
            style={{display: "inline-block", width: "auto"}}>
      <option value="true">true</option>
      <option value="false">false</option>
    </select>
  );

  render() {
    // @ts-ignore
    console.log(this.context);
    return (
      <span>
      <button onClick={this.removeHandler} className="btn btn-danger btn-sm">x</button>
        {this.constSelector}
    </span>
    );
  }
}

export default ConstantComp;
