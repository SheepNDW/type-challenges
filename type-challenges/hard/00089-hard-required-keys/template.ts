type RequiredKeys0<T> = keyof GetRequired<T>

// ==== Alternatives ====

type RequiredKeys<T, K = keyof T> = 
  K extends keyof T
  ? T extends Required<Pick<T, K>>
    ? K
    : never
  : never;
