import React, {ChangeEventHandler, Component, Context} from 'react';
import {Argument} from '../../evaluator/constants/Argument';
import {IThemeContext, ThemeContext} from '../../contextIndex';
import {Node} from '../../evaluator/Node';
import {Operation} from '../../evaluator/operations/Operation';


interface IProps {
  me: Node,
}

class ArgumentComp extends Component<IProps, any> {
  static contextType: Context<IThemeContext> = ThemeContext;

  handler: ChangeEventHandler<HTMLSelectElement> = (event) => {
    const {treeState, setTreeState, allArguments} = this.context as IThemeContext;
    const newNode: Argument = allArguments.filter((arg) => arg.getName() === event.target.value)[0];
    const props = this.props;

    const parent = props.me.getParent();
    // operation replacement for AND and OR
    if (parent instanceof Operation) {
      if (props.me === parent.getLeft()) {
        parent.setLeft(newNode);
      }

      if (props.me === parent.getRight()) {
        parent.setRight(newNode);
      }

      if (Object.is(parent, treeState)) {
        setTreeState({tree: parent});
        return;
      }

      //console.log('my parent after adding new node', parent);
      //console.log('after change', treeState);
      //console.log('compare', Object.is(parent, treeState));
      //console.log('--------------------');

      // https://stackoverflow.com/questions/41474986/how-to-clone-a-javascript-es6-class-instance
      const copy = Object.assign(Object.create(Object.getPrototypeOf(treeState)), treeState);
      setTreeState({tree: copy});

    } else {
      // operation replacement for Const and Arg
      setTreeState({tree: newNode});
      return;
    }
  };


  render() {
    const {allArguments} = this.context as IThemeContext;
    return <>
      <select defaultValue="select" onChange={this.handler}>
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
