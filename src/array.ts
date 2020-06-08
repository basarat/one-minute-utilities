export function isArray(array: unknown): array is Array<unknown> {
  return Array.isArray(array);
}

export function isEqual<T>(a: Array<T>, b: Array<T>) {
  return a.length == b.length && a.every((v, i) => v === b[i]);
}

export function max(array: Array<number>): number {
  return Math.max(...array);
}

export function min(array: Array<number>): number {
  return Math.min(...array);
}

export function sum(array: Array<number>): number {
  return array.reduce((acc, v) => acc + v, 0);
}

export function average(array: Array<number>): number {
  return sum(array) / array.length;
}

export function concat<T>(a: Array<T>, b: Array<T>): Array<T> {
  return a.concat(b);
}

export function unique<T>(array: Array<T>): Array<T> {
  return Array.from(new Set(array));
}
