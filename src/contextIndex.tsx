import React from 'react';
import {Node} from './evaluator/Node';
import {IArgument} from './App';

export interface IThemeContext {
  treeState: Node;
  setTreeState: (value: any) => undefined | boolean | void,
  allArguments: IArgument[]
}

export const ThemeContext = React.createContext<IThemeContext>({} as IThemeContext);
