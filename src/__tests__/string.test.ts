import { reverse } from "../string";

test('reverse', () => {
  expect(reverse('hello world')).toStrictEqual('dlrow olleh');
});
