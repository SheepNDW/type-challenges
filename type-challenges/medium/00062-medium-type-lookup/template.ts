// type LookUp<U extends { type: PropertyKey }, T extends PropertyKey> = {
//   [P in T]: U extends { type: T } ? U : never;
// }[T];

// Extract 原始碼：type Extract<T, U> = T extends U ? T : never;
type LookUp<U, T> = Extract<U, { type: T }>;
