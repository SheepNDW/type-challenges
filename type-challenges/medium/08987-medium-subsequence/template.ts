// type Subsequence<T> =
//   T extends [infer Head, ...infer Tail]
//   ? Subsequence<Tail> | [Head, ...Subsequence<Tail>]
//   : []
// ;

// ==== Alternatives ====

type Subsequence<
  T extends unknown[],
  Acc extends unknown[] = []
> =
  T extends [infer Head, ...infer Tail]
  ? Subsequence<Tail, Acc | [...Acc, Head]>
  : Acc
;
