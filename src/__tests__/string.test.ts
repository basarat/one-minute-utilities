import {
  reverse,
  isPalindrome,
  areAnagrams,
  lowerCaseFirst,
  upperCaseFirst,
  splitLines,
  escapeHTML,
  unescapeHTML,
  newLineToBreak,
  removeWhitespace,
  repeat,
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

test('lowerCaseFirst', () => {
  expect(lowerCaseFirst('Hello World')).toStrictEqual('hello World');
  expect(lowerCaseFirst('')).toStrictEqual('');
});

test('upperCaseFirst', () => {
  expect(upperCaseFirst('hello world')).toStrictEqual('Hello world');
  expect(upperCaseFirst('')).toStrictEqual('');
});

test('splitLines', () => {
  expect(splitLines('hello\nworld')).toStrictEqual(['hello', 'world']);
  expect(splitLines('hello\r\nworld')).toStrictEqual(['hello', 'world']);
  expect(splitLines('hello\r\nworld\r\nagain')).toStrictEqual(['hello', 'world', 'again']);
});

test('newLineToBreak', () => {
  expect(newLineToBreak('hello\nworld\r\nagain')).toStrictEqual('hello<br>world<br>again');
});

test('removeWhitespace', () => {
  expect(removeWhitespace('hello\nworld\r\n  again')).toStrictEqual('helloworldagain');
});

test('escapeHTML', () => {
  expect(escapeHTML(`<div>Hello"World'&`)).toStrictEqual('&lt;div&gt;Hello&quot;World&#39;&amp;');
});

test('unescapeHTML', () => {
  const str = `<div>Hello"World'&`;
  expect(unescapeHTML(escapeHTML(str))).toStrictEqual(str);
});

test('repeat', () => {
  expect(repeat('Hello', 5)).toStrictEqual('HelloHelloHelloHelloHello');
  expect(repeat('', 5)).toStrictEqual('');
});
