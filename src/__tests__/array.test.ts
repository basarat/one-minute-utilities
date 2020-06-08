import { isArray } from '../array';

test('isArray', () => {
  expect(isArray([])).toBe(true);
  expect(isArray('')).toBe(false);
});
