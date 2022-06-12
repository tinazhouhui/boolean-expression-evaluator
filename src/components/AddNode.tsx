import React, {useContext, useState} from 'react';
import {AND, ARGUMENT, CONSTANT, OR} from '../constants';
import {Node} from '../evaluator/Node';
import {Constant} from '../evaluator/constants/Constant';
import {Operation} from '../evaluator/operations/Operation';
import {Argument} from '../evaluator/constants/Argument';
import {And} from '../evaluator/operations/And';
import {Or} from '../evaluator/operations/Or';
import {ThemeContext} from '../contextIndex';

interface IProps {
  me: Node,
}

interface State {
  isFolded: boolean
}

export class AddNode extends React.Component<IProps, State> {
  // const {treeState, setTreeState} = useContext(ThemeContext);
  static contextType = ThemeContext;
  private readonly isFolded: boolean;

  constructor(props: IProps) {
    super(props);
    this.isFolded = false;
  }


  /**
   * ToDo: Refactor me!
   */
  handler = (event: any) => {
    const {treeState, setTreeState} = this.context as any;
    let newNode: Node;
    const props = this.props

    switch (event.target.value) {
      case AND:
        //ToDo: Prefilling one because of https://medium.com/@shanplourde/react-hooks-rendered-more-hooks-than-during-the-previous-render-d2c026d7cca3
        newNode = new And();
        break;
      case OR:
        //ToDo: Prefilling one because of https://medium.com/@shanplourde/react-hooks-rendered-more-hooks-than-during-the-previous-render-d2c026d7cca3
        newNode = new Or();
        break;
      case ARGUMENT:
        newNode = new Argument();
        break;
      default:
        newNode = new Constant();
    }

    console.log(props?.me?.getParent() instanceof Operation);
    // operation replacement for AND and OR
    if (props?.me?.getParent() instanceof Operation) {
      // @ts-ignore
      if (Object.is(props.me, props?.me?.getParent()?.getLeft())) {
        // @ts-ignore
        props?.me?.getParent()?.setLeft(newNode);
      } else {
        // @ts-ignore
        props?.me?.getParent()?.setRight(newNode);
      }
    }

    // //ToDo: Probably not necessary
    // props.me = newNode;

    // https://stackoverflow.com/questions/41474986/how-to-clone-a-javascript-es6-class-instance
    const copy = Object.assign(Object.create(Object.getPrototypeOf(treeState)), treeState);
    setTreeState(copy);
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

  // const [isFolded, setIsFolded] = useState(false);

  render() {
    return (
      <span>
      {this.isFolded ? this.selector :
        <button onClick={() => this.setState({isFolded: true})} className="btn btn-primary btn-sm">+</button>}
    </span>
    );
  }
}

export default AddNode;
