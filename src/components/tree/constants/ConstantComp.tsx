import React, {ChangeEventHandler, Context} from 'react';

import {Constant} from '../../../evaluator/constants/Constant';
import {ITreeContext, TreeContext} from '../../../context';
import NodeComp from '../NodeComp';

type Props = {
  me: Constant,
}

class ConstantComp extends NodeComp<Props, {}> {
  static contextType: Context<ITreeContext> = TreeContext;

  changeHandler: ChangeEventHandler<HTMLSelectElement> = (event) => {
    const {treeState, setTreeState} = this.context as ITreeContext;
    this.props.me.setValue(event.target.value === 'true');

    const copy = Object.assign(Object.create(Object.getPrototypeOf(treeState)), treeState);
    setTreeState(copy);
  };

  private readonly constSelector: JSX.Element = (
    <select
      name="constant"
      defaultValue={String(this.props.me.evaluate())} onChange={this.changeHandler}
      className="form-select"
      style={{display: "inline-block", width: "auto"}}
    >
      <option value="true">true</option>
      <option value="false">false</option>
    </select>
  );

  render() {
    return <span>
      {this.renderRemove()}
      {this.constSelector}
    </span>;
  }
}

export default ConstantComp;
