type ParseSign<T extends string> =
  T extends `${infer Sign}${string}`
    ? Sign extends '+' | '-'
      ? Sign
      : ''
    : ''
;

type ParsePercent<T extends string> = T extends `${string}%` ? '%' : '';

type ParseNumber<T extends string> =
  T extends `${ParseSign<T>}${infer N}${ParsePercent<T>}`
    ? N
    : ''
;

type PercentageParser0<T extends string> = [
  ParseSign<T>,
  ParseNumber<T>,
  ParsePercent<T>
];

// ==== Alternatives ====
type CheckPrefix<T> =
  T extends '+' | '-'
  ? T
  : never;

type CheckSuffix<T> =
  T extends `${infer P}%`
  ? [P, '%']
  : [T, ''];

type PercentageParser<T extends string> =
  T extends `${CheckPrefix<infer Sign>}${infer Rest}`
    ? [Sign, ...CheckSuffix<Rest>]
    : ['', ...CheckSuffix<T>];
