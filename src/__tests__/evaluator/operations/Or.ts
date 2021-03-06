import {describe, test} from '@jest/globals';
import {Or} from '../../../evaluator/operations/Or';
import {Constant} from '../../../evaluator/constants/Constant';

jest.mock('../../../components/ComponentFactory', () => jest.fn());

describe('Or operation', () => {
  const falseConst = new Constant(false);
  const trueConst = new Constant(true);

  test('Should evaluate OR to truthy if given false and true', () => {
    const or = new Or(falseConst, trueConst);
    expect(or.evaluate()).toBeTruthy();
  });

  test('Should evaluate OR to falsy if given false and false', () => {
    const or = new Or(falseConst, falseConst);
    expect(or.evaluate()).toBeFalsy();
  });
});
