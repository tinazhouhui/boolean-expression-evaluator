import {Node} from './evaluator/Node';
import {Undefined} from './evaluator/Undefined';
import React from 'react';
import {And} from './evaluator/operations/And';
import {Constant} from './evaluator/constants/Constant';

interface IThemeContext {
  treeState: Node;
  setTreeState: (value: any) => undefined | boolean | void,
}

export const defaultState: IThemeContext = {
  treeState: new And(new Constant(true), new Undefined()),
  setTreeState: (value: any) => {
    console.log('default', value);
  },
};

export const ThemeContext = React.createContext<IThemeContext>(defaultState);
