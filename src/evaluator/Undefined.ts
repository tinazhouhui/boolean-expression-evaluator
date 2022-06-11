import {Node} from './Node';
import AddNode from '../components/AddNode';
import React from 'react';

export type THandleChange = (event: React.ChangeEvent<HTMLSelectElement>) => void

export class Undefined extends Node {
  constructor(protected readonly handleChange: THandleChange) {
    super();
  }

  evaluate(): boolean {
    throw new Error('please select all properties');
  }

  toString(): string {
    throw new Error('please select all properties');
  }

  createComponent(): JSX.Element {
    return AddNode({handleChange: this.handleChange});
  }
}
