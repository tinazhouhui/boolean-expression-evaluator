import {Or} from './operations/Or';
import {And} from './operations/And';
import {Constant} from './constants/Constant';
import {Argument} from './constants/Argument';
import {Node} from './Node';
import {THandleChange, Undefined} from './Undefined';

type TConstant = boolean;
type TArgument = {
  value: TConstant,
  name: string,
}

type TOperation = {
  left: TConstant | TArgument,
  right: TConstant | TArgument,
}

type TAnd = {
  and: TOperation
}

type TOr = {
  or: TOperation
}

export function factory(leaf: any, handleChange: THandleChange): Node {
  console.log({leaf});

  if (typeof leaf === 'undefined') return new Undefined(handleChange);
  if (typeof leaf === 'boolean') return new Constant(leaf);

  const keys = Object.keys(leaf);
  // for arguments
  //todo get rid of tsignore
  if (keys.includes('name') && keys.includes('value')) {
    return new Argument(leaf.value, leaf.name);
  }

  // for and
  if (keys.includes('and')) {
    return new And(factory(leaf.and.left, handleChange), factory(leaf.and.right, handleChange));
  }

  // for or
  if (keys.includes('or')) {
    return new Or(factory(leaf.or.left, handleChange), factory(leaf.or.right, handleChange));
  }

  // todo throw error??
  return new Undefined(handleChange);
}
