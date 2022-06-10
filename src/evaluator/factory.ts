import {Or} from './operations/Or';
import {And} from './operations/And';
import {Constant} from './constants/Constant';
import {Argument} from './constants/Argument';
import {Node} from './Node';

export function factory(): Node {
    return new Or(
        new And(
            new Constant(true),
            new Argument(false, 'Bob'),
        ),
        new Constant(false),
    );
}
