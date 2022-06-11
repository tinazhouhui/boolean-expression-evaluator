import {describe, test} from '@jest/globals';
import {Argument} from '../../../evaluator/constants/Argument';

describe('Argument', () => {
    test('Should evaluate AND to falsy if given false and true', () => {
        const falseArg = new Argument(false, 'falseArgument');
        expect(falseArg.evaluate()).toBeFalsy();
    });

    test('Should evaluate AND to truthy if given true and true', () => {
        const trueArg = new Argument(true, 'trueArgument');
        expect(trueArg.evaluate()).toBeTruthy();
    });
});
