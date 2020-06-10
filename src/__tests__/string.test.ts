import {
  reverse,
  isPalindrome,
  areAnagrams
} from "../string";

test('reverse', () => {
  expect(reverse('hello world')).toStrictEqual('dlrow olleh');
});

test('isPalindrome', () => {
  expect(isPalindrome('abc')).toStrictEqual(false);
  expect(isPalindrome('abcba')).toStrictEqual(true);
});

test('areAnagrams', () => {
  expect(areAnagrams('node','denode')).toStrictEqual(false);
  expect(areAnagrams('node','deno')).toStrictEqual(true);
});
