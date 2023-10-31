type GetOptional<T> = {
  [P in keyof T as T[P] extends Required<T>[P] ? never : P]: T[P]
}

// ==== Alternatives ====

type GetOptional1<T> = {
  [P in keyof T as GetOptionalKey<T, P>]: T[P]
};

type GetOptionalKey<
  T, 
  K extends keyof T = keyof T
> = {
  [P in K]+?: T[P]
} extends {
  [P in K]: T[P]
} ? K
  : never;


