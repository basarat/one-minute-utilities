import {
  reverse,
  isPalindrome,
  areAnagrams,
  upperCaseFirst,
  lowerCaseFirst,
  upperCaseWords,
  splitLines,
  escapeHTML,
  unescapeHTML
} from "../string";

test('reverse', () => {
  expect(reverse('hello world')).toStrictEqual('dlrow olleh');
});

test('isPalindrome', () => {
  expect(isPalindrome('abc')).toStrictEqual(false);
  expect(isPalindrome('abcba')).toStrictEqual(true);
});

test('areAnagrams', () => {
  expect(areAnagrams('node', 'denode')).toStrictEqual(false);
  expect(areAnagrams('node', 'deno')).toStrictEqual(true);
});

test('upperCaseFirst', () => {
  expect(upperCaseFirst('hello world')).toStrictEqual('Hello world');
  expect(upperCaseFirst('')).toStrictEqual('');
});

test('lowerCaseFirst', () => {
  expect(lowerCaseFirst('Hello World')).toStrictEqual('hello World');
  expect(lowerCaseFirst('')).toStrictEqual('');
});

test('upperCaseWords', () => {
  expect(upperCaseWords('hello  world')).toStrictEqual('Hello  World');
  expect(upperCaseWords('')).toStrictEqual('');
});

test('splitLines', () => {
  expect(splitLines('hello\nworld')).toStrictEqual(['hello', 'world']);
  expect(splitLines('hello\r\nworld')).toStrictEqual(['hello', 'world']);
});

test('escapeHTML', () => {
  expect(escapeHTML(`<div>Hello"World'&`)).toStrictEqual('&lt;div&gt;Hello&quot;World&#39;&amp;');
});

test('unescapeHTML', () => {
  const str = `<div>Hello"World'&`;
  expect(unescapeHTML(escapeHTML(str))).toStrictEqual(str);
});
