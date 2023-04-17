type TypeLiteralOnly<T> =
  string extends T
  ? never
  : number extends T
    ? never
    : symbol extends T
      ? never
      : T;

type RemoveIndexSignature<T> = {
  [
    P in keyof T as TypeLiteralOnly<P>
  ]: T[P]
};

// ==== Alternatives ====
// type RemoveIndexSignature<T, P = PropertyKey> = {
//   [
//     K in keyof T as
//       P extends K
//       ? never
//       : K extends P
//         ? K
//         : never
//   ]: T[K]
// };
