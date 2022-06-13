import React, {ChangeEventHandler, Context} from 'react';
import {Argument} from '../../../evaluator/constants/Argument';
import {ITreeContext, TreeContext} from '../../../context';
import {Node} from '../../../evaluator/Node';
import stateReducer from '../../../stateReducer';
import NodeComp from '../NodeComp';

interface IProps {
  me: Node,
}

class ArgumentSelector extends NodeComp<IProps, {}> {
  static contextType: Context<ITreeContext> = TreeContext;

  changeHandler: ChangeEventHandler<HTMLSelectElement> = (event) => {
    const {treeState, setTreeState, allArguments} = this.context as ITreeContext;
    const newNode: Argument = allArguments.filter((arg) => {
      return arg.getName() === event.target.value;
    })[0];

    stateReducer(this.props.me, treeState, setTreeState, newNode);
  };

  render() {
    const {allArguments} = this.context as ITreeContext;
    return <>
      {this.renderRemove()}
      <select
        defaultValue="select"
        onChange={this.changeHandler}
          className="form-select"
          style={{display: "inline-block", width: "auto"}}
        >
        <option disabled={true} value="select">Select...</option>
        {allArguments.map((arg: Argument) => {
          const name = arg.getName();
          return <option key={name} value={name}>{name}</option>;
        })}
      </select>
    </>;
  }
}

export default ArgumentSelector;
