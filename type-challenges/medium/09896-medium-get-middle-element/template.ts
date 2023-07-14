// type GetMiddleElement<T extends unknown[]> =
//   T extends [unknown, infer A, ...infer B, unknown]
//     ? GetMiddleElement<[A, ...B]>
//     : T
// ;

// ==== Alternatives ====

// type GetMiddleElement<T extends unknown[]> =
//   T['length'] extends 0 | 1 | 2
//   ? T
//   : T extends [unknown, ...infer Mid, unknown]
//     ? GetMiddleElement<Mid>
//     : never
// ;

type GetMiddleElement<T extends unknown[]> =
  T extends [infer L, ...infer M, infer R]
  ? M extends []
    ? [L, R]
    : GetMiddleElement<M>
  : T
;
