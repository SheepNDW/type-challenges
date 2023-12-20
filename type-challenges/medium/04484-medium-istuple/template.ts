type IsTuple<T> =
  [T] extends [never]
  ? false
  : T extends readonly unknown[]
    ? number extends T["length"]
      ? false
      : true
    : false;

// ==== Notes ====
// when doing `number extends T['length']`:
// - an array's "length" is `number`
// - a tuple's "length" is a specific number literal


// ==== Alternatives ====
type _IsAny<T> = 1 extends T & 0 ? true : false;
// reference: 01042-medium-isnever
// type IsNever<T> = [T] extends [never] ? true : false;

type IsTuple1<T> =
  true extends _IsAny<T> | IsNever<T>
  ? false
  : T extends
      | readonly [unknown, ...unknown[]]
      | readonly []
    ? true
    : false;
