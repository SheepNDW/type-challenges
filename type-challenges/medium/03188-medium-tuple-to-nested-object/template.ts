type TupleToNestedObject<T, U> =
  T extends [infer Head extends PropertyKey, ...infer Tail]
  ? {
    [P in Head]: TupleToNestedObject<Tail, U>
  }
  : U;

// ==== Alternatives ====
// you can also use `Head & PropertyKey` to constrain
type TupleToNestedObject2<T, U> =
  T extends [infer Head, ...infer Tail]
  ? {
    [P in Head & PropertyKey]: TupleToNestedObject<Tail, U>
  }
  : U;
