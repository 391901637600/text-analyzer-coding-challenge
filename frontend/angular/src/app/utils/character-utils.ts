export function isVowel(char: string): boolean {
  return char.toLowerCase().match(/[aeiou]/) !== null;
}

export function isConsonant(char: string): boolean {
  return char.toLowerCase().match(/[bcdfghjklmnpqrstvwxyz]/) !== null;
}
