type MapTypes0<
  T extends {}, 
  R extends { mapFrom: unknown; mapTo: unknown}
> = {
  [P in keyof T]:
    T[P] extends R['mapFrom']
      ? R extends { mapFrom: T[P] }
        ? R['mapTo']
        : never
      : T[P]
};

// ==== Alternatives ====
// solution 2
type Transform<From = unknown, To = unknown> = {
  mapFrom: From;
  mapTo: To;
}
type From<T> = T extends Transform<infer F> ? F : never;
type To<T, F> = T extends Transform<F, infer To> ? To : never;

type MapTypes1<T,R extends Transform> = {
  [P in keyof T]:
    T[P] extends From<R>
    ? To<R, T[P]>
    : T[P]
};

// solution 3
type GetMapToType<
  T,
  R,
  Type = R extends { mapFrom: T; mapTo: infer To} ? To : never
> = [Type] extends [never] ? T : Type;

type MapTypes<T, R> = {
  [P in keyof T]: GetMapToType<T[P], R>
}
