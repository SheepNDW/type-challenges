type Trunc<T extends string | number> =
  `${T}` extends `${infer Mantissa}.${string}`
  ? Mantissa extends `${number}` // check for '.3' case
    ? `${Mantissa}`
    : '0'
  : `${T}`
;

// ==== Alternatives ====
type Trunc1<T extends string | number> = 
  `${T}` extends `.${string}`
  ? '0'
  : `${T}` extends `${infer Head}.${string}`
    ? Head
    : `${T}`
;


// type Trunc<
//   T extends string | number,
//   U extends string = ''
// > =
//   `${T}` extends `${infer Head}${infer Tail}`
//   ? Head extends '.'
//     ? U extends `${number}`
//       ? U
//       : '0'
//     : Trunc<Tail, `${U}${Head}`>
//   : U['length'] extends 0
//     ? T
//     : U
// ;
