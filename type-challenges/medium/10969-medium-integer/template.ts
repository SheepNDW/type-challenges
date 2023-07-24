// bigint 沒有小數點，所以可以用來判斷是否為整數
type Integer<T extends number> =
  `${T}` extends `${bigint}`
  ? T
  : never
;

// ==== Alternatives ====

type Integer1<T> =
  `${T & number}` extends `${number}.${number}`
  ? never
  : number extends T // or 0 extends T
    ? never
    : T
;

type Digits = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
type Integer2<T extends number> =
  `${T}` extends `${Digits}${string}`
  ? `${T}` extends `${string}.${string}${Digits}`
    ? never
    : T
  : never;
;
