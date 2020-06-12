export function reverse(str: string): string {
  return str.split('').reverse().join('');
}

export function isPalindrome(str: string): boolean {
  return str === str.split('').reverse().join('');
}

export function areAnagrams(a: string, b: string): boolean {
  return a.split('').sort().join('') === b.split('').sort().join('');
}

export function upperCaseFirst(str: string): string {
  return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
}

export function lowerCaseFirst(str: string): string {
  return `${str.charAt(0).toLowerCase()}${str.slice(1)}`;
}

export function upperCaseWords(str: string): string {
  return str
    .split(' ')
    .map(w => `${w.charAt(0).toUpperCase()}${w.slice(1)}`)
    .join(' ');
}

export function splitLines(str: string): string[] {
  return str.split(/\r?\n/);
}

export function newLineToBreak(str: string): string {
  return str.replace(/\r?\n/g, '<br>');
}

export function removeWhitespace(str: string): string {
  return str.replace(/\s/g, '');
}

export function escapeHTML(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export function unescapeHTML(str: string): string {
  return str
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#0*39;/g, "'");
}

export function repeat(str: string, n: number): string {
  return str.repeat(n);
}
