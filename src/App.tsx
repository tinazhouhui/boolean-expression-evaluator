import React from "react";

import Tree from './Tree';
import {Node} from './evaluator/Node';
import {ThemeContext} from './contextIndex';
import {Undefined} from './evaluator/Undefined';
import CreateArgument from './components/createArguments/CreateArgument';

export interface IArgument {
  name: string,
  value: boolean,
}

type State = {
  tree: Node,
  allArguments: IArgument[]
}

export default class App extends React.Component<any, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      tree: new Undefined(),
      allArguments: []
    };
  }

  handleChange = (name: string, value: string) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        allArguments: prevState.allArguments.map((arg: IArgument) => {
          if (arg.name === name) {
            arg.value = Boolean(value);
          }
          return arg;
        })
      };
    });
  };

  handleNewArg = (newArg: IArgument) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        allArguments: [...prevState.allArguments, newArg]
      };
    });
  };

  render() {
    const setState = (value: any): any => {
      return this.setState.bind(this)(value);
    }
    return <ThemeContext.Provider value={{
      treeState: this.state.tree,
      setTreeState: setState,
      allArguments: this.state.allArguments
    }}>
      <CreateArgument
        allArgs={this.state.allArguments}
        handleChange={this.handleChange}
        handleNewArg={this.handleNewArg}
      />
      <Tree/>
    </ThemeContext.Provider>;
  }
}
