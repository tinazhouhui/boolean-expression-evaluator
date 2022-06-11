import {Or} from './operations/Or';
import {And} from './operations/And';
import {Constant} from './constants/Constant';
import {Argument} from './constants/Argument';
import {Node} from './Node';
import {Undefined} from './Undefined';

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

export function factory(leaf: any): Node {
    if (typeof leaf === 'boolean') return new Constant(leaf);

    const keys = Object.keys(leaf)
    // for arguments
    //todo get rid of tsignore
    if (keys.includes('name') && keys.includes('value')) {
        return new Argument(leaf.value, leaf.name)
    }

    // for and
    if (keys.includes('and')) {
        return new And(factory(leaf.and.left), factory(leaf.and.right))
    }

    // for or
    if (keys.includes('or')) {
        return new Or(factory(leaf.or.left), factory(leaf.or.right))
    }

    return new Undefined();
}
