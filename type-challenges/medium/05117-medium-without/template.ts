type ToUnion<T> = T extends unknown[] ? T[number] : T;

type Without<T, U> =
  T extends [infer Head, ...infer Tail]
  ? Head extends ToUnion<U>
    ? Without<Tail, U>
    : [Head, ...Without<Tail, U>]
  : []
;
