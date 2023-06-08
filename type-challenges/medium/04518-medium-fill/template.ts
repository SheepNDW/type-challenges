type Fill<
  T extends unknown[],
  N,
  Start extends number = 0,
  End extends number = T['length'],
  Count extends 1[] = [],
  Flag extends boolean =
    Count['length'] extends Start
    ? true
    : false
> =
  Count['length'] extends End
  ? T
  : T extends [infer Head, ...infer Tail]
    ? Flag extends false
      ? [Head, ...Fill<Tail, N, Start, End, [...Count, 1]>]
      : [N, ...Fill<Tail, N, Start, End, [...Count, 1], Flag>]
    : T
;

// ==== Alternatives ====
// type Fill<
//   T extends unknown[],
//   N,
//   Start extends number = 0,
//   End extends number = T['length'],
//   Acc extends unknown[] = []
// > =
//   T extends [infer Head, ...infer Tail]
//   ? [...Acc, ''][Start] extends undefined
//     ? Fill<Tail, N, Start, End, [...Acc, Head]>
//     : [...Acc, ''][End] extends undefined
//       ? Fill<Tail, N, Start, End, [...Acc, N]> // REPLACE
//       : Fill<Tail, N, Start, End, [...Acc, Head]>
//   : Acc
// ;
