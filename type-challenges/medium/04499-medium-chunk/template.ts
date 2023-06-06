// type Chunk<
//   T extends unknown[],
//   U extends number,
//   Acc extends unknown[] = []
// > =
//   Acc['length'] extends U
//   ? [Acc, ...Chunk<T, U>] // reached chunk size
//   : T extends [infer Head, ...infer Tail]
//     ? Chunk<Tail, U, [...Acc, Head]>
//     : Acc extends []
//       ? Acc
//       : [Acc]
// ;

// ==== Alternatives ====
type Chunk<
  T,
  U extends number,
  Temp extends unknown[] = [],
  Acc extends unknown[] = []
> =
  T extends [infer Head, ...infer Tail]
  ? Temp['length'] extends U
    ? Chunk<Tail, U, [Head], [...Acc, Temp]>
    : Chunk<Tail, U, [...Temp, Head], Acc>
  : Temp['length'] extends 0
    ? Acc
    : [...Acc, Temp]
;
