type OptionalKeys0<T> = keyof GetOptional<T>

// ==== Alternatives ====

type OptionalKeys<T, K = keyof T> = 
  K extends keyof T
  ? T[K] extends Required<T>[K]
    ? never
    : K
  : never;
