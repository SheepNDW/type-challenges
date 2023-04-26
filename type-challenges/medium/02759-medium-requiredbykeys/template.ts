// type Copy<T> = Pick<T, keyof T>;

// type RequiredByKeys<
//   T, 
//   K extends keyof T = keyof T
// > = Copy<{
//   [P in keyof T as P extends K ? P : never]-?: T[P]
// } & {
//   [P in keyof T as P extends K ? never : P]: T[P]
// }>

// ==== Alternatives ====
type RequiredByKeys<
  T,
  K extends keyof T = keyof T
> =
  T & { [P in K]-?: T[P] } extends infer U
  ? { [P in keyof U]: U[P] }
  : never
;
