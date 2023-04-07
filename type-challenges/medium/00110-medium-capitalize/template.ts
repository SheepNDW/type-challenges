type MyCapitalize<S extends string> = S extends `${infer FirstChar}${infer Rest}`
  ? `${Uppercase<FirstChar>}${Rest}`
  : S;

// Alternatives
interface ToUpperCase {
  a: 'A';
  b: 'B';
  c: 'C';
  d: 'D';
  e: 'E';
  f: 'F';
  g: 'G';
  h: 'H';
  i: 'I';
  j: 'J';
  k: 'K';
  l: 'L';
  m: 'M';
  n: 'N';
  o: 'O';
  p: 'P';
  q: 'Q';
  r: 'R';
  s: 'S';
  t: 'T';
  u: 'U';
  v: 'V';
  w: 'W';
  x: 'X';
  y: 'Y';
  z: 'Z';
}

type LowerCase = keyof ToUpperCase;

type MyCapitalize2<T extends string> = T extends `${infer FirstChar}${infer Rest}`
  ? FirstChar extends LowerCase
    ? `${ToUpperCase[FirstChar]}${Rest}`
    : T
  : T;
