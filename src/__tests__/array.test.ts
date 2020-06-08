import {
  isArray,
  isEqual,
  max,
  min,
  sum,
  average,
  concat,
  unique,
  range,
  flat
} from '../array';

test('isArray', () => {
  expect(isArray([])).toStrictEqual(true);
  expect(isArray('')).toStrictEqual(false);
});

test('isEqual', () => {
  expect(isEqual([1, 2, 3], [1, 2, 3])).toStrictEqual(true);
  expect(isEqual([1, 2, 3], [1, 2])).toStrictEqual(false);
  expect(isEqual([1, 2, 3], [1, '2', 3])).toStrictEqual(false);
});

test('max', () => {
  expect(max([1, 2, 3])).toStrictEqual(3);
});

test('min', () => {
  expect(min([1, 2, 3])).toStrictEqual(1);
});

test('sum', () => {
  expect(sum([1, 2, 3])).toStrictEqual(6);
});

test('average', () => {
  expect(average([1, 2, 3])).toStrictEqual(2);
  expect(average([])).toStrictEqual(NaN);
});

test('concat', () => {
  expect(concat([1, 2], [3, 4])).toStrictEqual([1, 2, 3, 4]);
});

test('unique', () => {
  expect(unique([1, 2, 2, 3])).toStrictEqual([1, 2, 3]);
});

test('range', () => {
  expect(range(3, 7)).toStrictEqual([3, 4, 5, 6, 7]);
});

test('flat', () => {
  expect(flat([[1, 2], [3, 4]])).toStrictEqual([1, 2, 3, 4]);
});
