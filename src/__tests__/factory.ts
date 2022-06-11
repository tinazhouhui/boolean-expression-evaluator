import {describe, test} from '@jest/globals';
import {factory} from '../evaluator/factory';


describe('factory', () => {
  test('Should correctly evaluate a falsy expression', () => {
    const falseExpression = {
      or: {
        left: {
          and: {
            left: true,
            right: {
              value: false,
              name: 'Bob'
            }
          }
        },
        right: false,
      }
    };

    const evaluator = factory(falseExpression);
    expect(evaluator.evaluate()).toBeFalsy();
  });

  test('Should correctly evaluate a truthy expression', () => {
    const trueExpression = {
      or: {
        left: {
          and: {
            left: true,
            right: {
              value: true,
              name: 'Bob'
            }
          }
        },
        right: false,
      }
    };

    const evaluator = factory(trueExpression);
    expect(evaluator.evaluate()).toBeTruthy();
  });

  test('Should throw an error for incomplete expression', () => {
    const incompleteExpression = {
      or: {
        left: {
          and: {
            left: undefined,
            right: {
              value: true,
              name: 'Bob'
            }
          }
        },
        right: false,
      }
    };

    const evaluator = factory(incompleteExpression);
    expect(() => {
      evaluator.evaluate();
    }).toThrow('please select all properties');
  });

});
