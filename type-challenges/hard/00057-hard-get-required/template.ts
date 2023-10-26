type GetRequired0<T> = {
  [K in keyof T as T[K] extends Required<T>[K] ? K : never]: T[K];
}

// ==== Alternatives ====
type GetRequired<
  T,
  U extends Required<T> = Required<T>,
  K extends keyof T = keyof T,
> = 
  Pick<
    T, 
    K extends keyof T
    ? T[K] extends U[K]
      ? K
      : never
    : never
  >;
