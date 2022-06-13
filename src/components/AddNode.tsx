import React, {ChangeEventHandler, Component} from 'react';
import {AND, ARGUMENT, CONSTANT, OR} from '../constants';
import {Node} from '../evaluator/Node';
import {Constant} from '../evaluator/constants/Constant';
import {Argument} from '../evaluator/constants/Argument';
import {And} from '../evaluator/operations/And';
import {Or} from '../evaluator/operations/Or';
import {ITreeContext, TreeContext} from '../context';
import {Undefined} from '../evaluator/Undefined';
import stateReducer from '../stateReducer';

interface IProps {
  me: Node,
}

interface IState {
  isFolded: boolean;
}

class AddNode extends Component<IProps, IState> {
  static contextType = TreeContext;
  state = {
    isFolded: false
  };

  handler: ChangeEventHandler<HTMLSelectElement> = (event) => {
    const {treeState, setTreeState} = this.context as ITreeContext;
    let newNode: Node;

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

    stateReducer(this.props.me, treeState, setTreeState, newNode);
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
