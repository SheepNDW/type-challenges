type Merge<F, S> = {
  [P in keyof F | keyof S]:
    P extends keyof S
    ? S[P]
    : P extends keyof F
      ? F[P]
      : never
};

// ==== Alternatives ====
// type Merge<F, S> = {
//   [P in keyof (F & S)]:
//     P extends keyof S
//     ? S[P]
//     : (F & S)[P]
// };

// type Merge<
//   L,
//   R,
//   K extends keyof (L | R) = keyof (L | R)
// > =
//   Omit<
//     Omit<L, K> & Omit<R, K> & Pick<R, K>,
//     never
//   >
// ;

// type Merge<
//   A extends Record<PropertyKey, unknown>,
//   B extends Record<PropertyKey, unknown>
// > = {
//   [K in keyof (A & B)]:
//     K extends keyof B
//     ? B[K]
//     : A[K]
// };
