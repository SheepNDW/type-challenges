type Diff<O, O1> = {
  [P in (keyof O | keyof O1) as Exclude<P, keyof O & keyof O1>]: (O & O1)[P];
};

// ==== Alternatives ====
// type Diff<O, O1> = {
//   [P in (keyof O | keyof O1)
//     as Exclude<P, keyof O & keyof O1>
//   ]:
//     P extends keyof O
//     ? O[P]
//     : P extends keyof O1
//       ? O1[P]
//       : never
// };

// type Diff<L, R> = Omit<L & R, keyof (L | R)>;
// type Diff<L, R> = Omit<L & R, keyof L & keyof R>;

// type Diff<L, R> = Required<
//   Omit<L, keyof R>
//   & Omit<R, keyof L>
// >;
