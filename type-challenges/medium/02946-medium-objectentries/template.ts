type ObjectEntries<T, U extends keyof T = keyof T> =
  U extends unknown
  ? [
      U,
      T[U] extends (infer F | undefined)
      ? F
      : T[U]
    ]
  : [];

// ==== Alternatives ====

// grabbing specific T values
/* type ObjectEntries<T> =
  keyof T extends infer P
  ? P extends keyof T
    ? [
        P,
        Required<T>[P] extends never
          ? undefined
          : Required<T>[P]
      ]
    : never
  : never; */

/* type RemoveUndefined<T> =
  [T] extends [undefined]
  ? T
  : Exclude<T, undefined>;

type ObjectEntries<T> = {
  [P in keyof T]-?: [P, RemoveUndefined<T[P]>];
}[keyof T]; */
