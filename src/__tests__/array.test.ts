import { isArray, isEqual } from '../array';

test('isArray', () => {
  expect(isArray([])).toBe(true);
  expect(isArray('')).toBe(false);
});

test('isEqual', () => {
  expect(isEqual([1, 2, 3], [1, 2, 3])).toBe(true);
  expect(isEqual([1, 2, 3], [1, 2])).toBe(false);
  expect(isEqual([1, 2, 3], [1, '2', 3])).toBe(false);
});
