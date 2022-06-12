import React, {useContext, useState} from 'react';
import {AND, ARGUMENT, CONSTANT, OR} from '../constants';
import {Node} from '../evaluator/Node';
import {ThemeContext} from '../context';
import {Constant} from '../evaluator/constants/Constant';
import {Operation} from '../evaluator/operations/Operation';
import {Argument} from '../evaluator/constants/Argument';
import {And} from '../evaluator/operations/And';
import {Or} from '../evaluator/operations/Or';

interface IProps {
  me: Node,
}

function AddNode(props: IProps) {
  const {treeState, setTreeState} = useContext(ThemeContext);

  /**
   * ToDo: Refactor me!
   */
  const handler = (event: any) => {
    let newNode: Node;

    switch (event.target.value) {
      case AND:
        //ToDo: Prefilling one because of https://medium.com/@shanplourde/react-hooks-rendered-more-hooks-than-during-the-previous-render-d2c026d7cca3
        newNode = new And(new Constant());
        break;
      case OR:
        //ToDo: Prefilling one because of https://medium.com/@shanplourde/react-hooks-rendered-more-hooks-than-during-the-previous-render-d2c026d7cca3
        newNode = new Or(new Constant());
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

  const selector: JSX.Element = (
    <>
      <button onClick={() => setIsFolded(false)} className="btn btn-danger btn-sm">x</button>
      <select defaultValue="select" onChange={handler} className="form-select" style={{ display: "inline-block", width: "auto"}}>
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

  const [isFolded, setIsFolded] = useState(false);

  return (
    <span>
      {isFolded ? selector :
        <button onClick={() => setIsFolded(true)} className="btn btn-primary btn-sm">+</button>}
    </span>
  );
}

export default AddNode;
