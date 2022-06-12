import React from "react";

import Tree from './Tree';
import {Node} from './evaluator/Node';
import {ThemeContext} from './contextIndex';
import {And} from './evaluator/operations/And';
import {Undefined} from './evaluator/Undefined';


export default class App extends React.Component {
  // const [treeState, setTreeState] = useState(defaultState.treeState);

  constructor(props: any) {
    super(props);
    this.state =  new And(new Undefined(), new Undefined())
  }

  render() {
    return (
      <ThemeContext.Provider value={{
        treeState: this.state as Node,
        setTreeState: this.setState
      }}>
        <Tree/>
      </ThemeContext.Provider>
    );
  }
}
