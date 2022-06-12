import React, {ChangeEventHandler, Context, MouseEventHandler, Component} from 'react';

import {Constant} from '../../evaluator/constants/Constant';
import {IThemeContext, ThemeContext} from '../../contextIndex';
import stateReducer from '../../stateReducer';

type Props = {
  me: Constant,
}

class ConstantComp extends Component<Props, any> {
  static contextType: Context<IThemeContext> = ThemeContext;

  removeHandler: MouseEventHandler<HTMLButtonElement> = () => {
    const {treeState, setTreeState} = this.context as IThemeContext;
    stateReducer(this.props.me, treeState, setTreeState);
  };

  changeHandler: ChangeEventHandler<HTMLSelectElement> = (event) => {
    const {treeState, setTreeState} = this.context as IThemeContext;
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
    return <span>
      <button onClick={this.removeHandler} className="btn btn-danger btn-sm">x</button>
      {this.constSelector}
    </span>;
  }
}

export default ConstantComp;
