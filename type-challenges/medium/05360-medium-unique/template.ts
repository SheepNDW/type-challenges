type isInclude<T, U> =
  T extends [infer Head, ...infer Tail]
  ? isEqual<Head, U> extends true
    ? true
    : isInclude<Tail, U>
  : false
;

type Unique<T extends unknown[]> =
  T extends [...infer Rest, infer Tail]
  ? isInclude<Rest, Tail> extends true
    ? Unique<Rest>
    : [...Unique<Rest>, Tail]
  : []
;
