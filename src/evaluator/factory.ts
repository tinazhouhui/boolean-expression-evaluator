import {Or} from './Or';
import {And} from './And';
import {Constant} from './Constant';
import {Argument} from './Argument';
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