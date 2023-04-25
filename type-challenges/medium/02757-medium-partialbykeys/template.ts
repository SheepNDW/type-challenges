// type MergeIntersection<T> = {
//   [P in keyof T]: T[P]
// }

// type PartialByKeys<
//   T,
//   K extends keyof T = keyof T
// > =
//   MergeIntersection<{
//     [P in keyof T as P extends K ? P : never]?: T[P]
//   } & {
//     [P in keyof T as P extends K ? never:P]: T[P]
//   }>;

// ==== Alternatives ====
type Copy<T> = Pick<T, keyof T>;

type PartialByKeys<
  T,
  K extends keyof T = keyof T
> =
  Copy<
    Partial<Pick<T, K>>
    & Omit<T, K>
  >;
