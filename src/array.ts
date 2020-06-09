export function isArray(array: unknown): array is unknown[] {
  return Array.isArray(array);
}

export function isEqual<T>(a: T[], b: T[]): boolean {
  return a.length === b.length && a.every((v, i) => v === b[i]);
}

export function max(array: number[]): number {
  return Math.max(...array);
}

export function min(array: number[]): number {
  return Math.min(...array);
}

export function sum(array: number[]): number {
  return array.reduce((acc, v) => acc + v, 0);
}

export function average(array: number[]): number {
  return array.reduce((acc, v) => acc + v, 0) / array.length;
}

export function concat<T>(a: T[], b: T[]): T[] {
  return a.concat(b);
}

export function unique<T>(array: T[]): T[] {
  return Array.from(new Set(array));
}

export function range(min: number, max: number): number[] {
  return Array(max - min + 1).fill(0).map((_, i) => min + i);
}

export function flat<T>(array: T[][]): T[] {
  return array.flat();
}
