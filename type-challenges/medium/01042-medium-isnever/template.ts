// type IsNever<T> = [T] extends [never] ? true : false;

/*
|     | [never] | never[] |
| --- | ------- | ------- |
| [T] | ✓ (0)   | ✓ (1)   |
| T[] | ✓ (2)   | ✓ (3)   |
*/
type IsNever0<T> = [T] extends [never] ? true : false;
type IsNever1<T> = [T] extends never[] ? true : false;
type IsNever2<T> = T[] extends [never] ? true : false;
type IsNever3<T> = T[] extends never[] ? true : false;

// ==== Alternatives ====
type IsNever<T> =
  [T, never] extends [never, T]
  ? true
  : false
;

// ================== NOTE ==================
// `never` can not extend `never`,
// but, a tuple containing only never (`[never]`)
// can extend another tuple (again containing never)
// reference: https://github.com/type-challenges/type-challenges/issues/22791
