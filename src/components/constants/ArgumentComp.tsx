import React, {ChangeEventHandler, Component, Context, MouseEventHandler} from 'react';
import {Argument} from '../../evaluator/constants/Argument';
import {IThemeContext, ThemeContext} from '../../contextIndex';
import {Node} from '../../evaluator/Node';
import stateReducer from '../../stateReducer';


interface IProps {
  me: Node,
}

class ArgumentComp extends Component<IProps, any> {
  static contextType: Context<IThemeContext> = ThemeContext;

  removeHandler: MouseEventHandler<HTMLButtonElement> = () => {
    const {treeState, setTreeState} = this.context as IThemeContext;
    stateReducer(this.props.me, treeState, setTreeState);
  };

  changeHandler: ChangeEventHandler<HTMLSelectElement> = (event) => {
    const {treeState, setTreeState, allArguments} = this.context as IThemeContext;
    const newNode: Argument = allArguments.filter((arg) => {
      return arg.getName() === event.target.value;
    })[0];

    stateReducer(this.props.me, treeState, setTreeState, newNode);
  };

  render() {
    const {allArguments} = this.context as IThemeContext;
    return <>
      <button onClick={this.removeHandler} className="btn btn-danger btn-sm">x</button>
      <select defaultValue="select" onChange={this.changeHandler}>
        <option disabled={true} value="select">Select...</option>
        {allArguments.map((arg: Argument) => {
          const name = arg.getName();
          return <option key={name} value={name}>{name}</option>;
        })}
      </select>
    </>;
  }
}

export default ArgumentComp;
