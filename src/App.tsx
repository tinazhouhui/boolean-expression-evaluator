import React from "react";

import Tree from './components/tree/Tree';
import {Node} from './evaluator/Node';
import {TreeContext} from './context';
import {Undefined} from './evaluator/Undefined';
import CreateArgument from './components/createArguments/CreateArgument';
import {Argument} from './evaluator/constants/Argument';

export interface IArgument {
  name: string,
  value: boolean,
}

interface IState {
  tree: Node,
  allArguments: Argument[]
}

class App extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      tree: new Undefined(),
      allArguments: []
    };
  }

  handleNewArg = (newArg: IArgument) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        allArguments: [...prevState.allArguments, new Argument(newArg.value, newArg.name)]
      };
    });
  };

  render() {
    const setState = this.setState.bind(this);
    return <TreeContext.Provider value={{
      treeState: this.state.tree,
      setTreeState: setState,
      allArguments: this.state.allArguments
    }}>
      <CreateArgument
        allArgs={this.state.allArguments}
        handleNewArg={this.handleNewArg}
      />
      <Tree/>
    </TreeContext.Provider>;
  }
}


export default App;
