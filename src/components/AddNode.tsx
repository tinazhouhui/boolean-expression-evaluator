import React, {ChangeEventHandler, Component} from 'react';
import {AND, ARGUMENT, CONSTANT, OR} from '../constants';
import {Node} from '../evaluator/Node';
import {Constant} from '../evaluator/constants/Constant';
import {Operation} from '../evaluator/operations/Operation';
import {Argument} from '../evaluator/constants/Argument';
import {And} from '../evaluator/operations/And';
import {Or} from '../evaluator/operations/Or';
import {IThemeContext, ThemeContext} from '../contextIndex';
import {Undefined} from '../evaluator/Undefined';

interface IProps {
  me: Node,
}

interface State {
  isFolded: boolean;
}

class AddNode extends Component<IProps, State> {
  static contextType = ThemeContext;
  state = {
    isFolded: false
  };

  handler: ChangeEventHandler<HTMLSelectElement> = (event) => {
    const {treeState, setTreeState} = this.context as IThemeContext;
    let newNode: Node;
    const props = this.props;

    switch (event.target.value) {
      case AND:
        newNode = new And(new Undefined(), new Undefined());
        break;
      case OR:
        newNode = new Or(new Undefined(), new Undefined());
        break;
      case ARGUMENT:
        newNode = new Argument();
        break;
      default:
        newNode = new Constant();
    }

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


  selector: JSX.Element = (
    <>
      <button onClick={() => this.setState({isFolded: false})} className="btn btn-danger btn-sm">x</button>
      <select defaultValue="select" onChange={this.handler} className="form-select"
              style={{display: "inline-block", width: "auto"}}>
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

  handleClick = () => {
    this.setState({isFolded: true});
  };

  render() {
    return (
      <span>
      {this.state.isFolded ? this.selector :
        <button onClick={this.handleClick} className="btn btn-primary btn-sm">+</button>}
    </span>
    );
  }
}

export default AddNode;
