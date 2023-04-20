// type DropChar<T, C extends string> =
//   T extends `${infer Left}${C}${infer Right}`
//   ? `${Left}${DropChar<Right, C>}`
//   : T;

// ==== Alternatives ====
type DropChar<S, C> =
  S extends `${infer Left}${infer Right}`
  ? `${
    [Left, C] extends [C, Left]
    ? ''
    : Left
  }${DropChar<Right, C>}`
  : S;
