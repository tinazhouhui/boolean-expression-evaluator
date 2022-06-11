import {describe, test} from '@jest/globals';
import {And} from '../../../evaluator/operations/And';
import {Constant} from '../../../evaluator/constants/Constant';

describe('AND operation', () => {
  const falseConst = new Constant(false);
  const trueConst = new Constant(true);

  test('Should evaluate AND to falsy if given false and true', () => {
    const and = new And(falseConst, trueConst);
    expect(and.evaluate()).toBeFalsy();
  });

  test('Should evaluate AND to truthy if given true and true', () => {
    const and = new And(trueConst, trueConst);
    expect(and.evaluate()).toBeTruthy();
  });
});
