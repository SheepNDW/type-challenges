// type AllCombinations<
//   S extends string,
//   Acc extends string = StringToUnion<S>
// > =
//   IsNever<Acc> extends true
//   ? ''
//   : '' | {
//     [Combo in Acc]:
//       `${Combo}${AllCombinations<never, Exclude<Acc, Combo>>}`
//   }[Acc];

// ==== Alternatives ====
type AllCombinations<
  S extends string,
  Acc extends string = ''
> =
  S extends `${infer Head}${infer Tail}`
  ? | `${Head}${AllCombinations<`${Acc}${Tail}`>}`
    | AllCombinations<Tail, `${Acc}${Head}`>
  : '';
