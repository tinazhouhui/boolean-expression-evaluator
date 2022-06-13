import {describe, test} from '@jest/globals';
import {Constant} from '../../../evaluator/constants/Constant';

jest.mock('../../../components/ComponentFactory', () => jest.fn());

describe('Constant', () => {
  test('Should evaluate AND to falsy if given false and true', () => {
    const falseConst = new Constant(false);
    expect(falseConst.evaluate()).toBeFalsy();
  });

  test('Should evaluate AND to truthy if given true and true', () => {
    const trueConst = new Constant(true);
    expect(trueConst.evaluate()).toBeTruthy();
  });
});
