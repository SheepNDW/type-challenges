// type AppendToObject<T, U extends PropertyKey, V> = {
//   [P in keyof T | U]: (T & Record<U, V>)[P]
// };

// Alternatives
type AppendToObject<T, U extends PropertyKey, V> = {
  [P in keyof T | U]:
    P extends keyof T
    ? T[P]
    : V
};

// type AppendToObject<T, U extends PropertyKey, V> =
//  Omit<T & { [P in U]: V }, never>;
