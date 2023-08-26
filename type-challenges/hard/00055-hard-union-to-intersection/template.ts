type UnionToIntersection<T> =
  (
    T extends any
    ? (arg: T) => unknown
    : never
  ) extends (arg: infer U) => void
  ? U
  : never
;

/**
 * @link https://github.com/type-challenges/type-challenges/issues/25061
 * "
 * the magic of this solution is
 * given a type like `(arg: U) => any | (arg: V) => any`,
 * if you want to find an argument (using keyword infer)
 * satisfying U and V, the type of it must be `U & V`
 * "
 */
type Foo<T> =
T extends {
    a: infer U;
    b: infer U;
  }
? U
: never;

type T10 = Foo<{ a: string; b: string }>; // string
type T11 = Foo<{ a: string; b: number }>; // string | number

type Bar<T> =
  T extends {
      a: (x: infer U) => void;
      b: (x: infer U) => void;
    }
  ? U
  : never;

type T20 = Bar<{
  a: (x: string) => void;
  b: (x: string) => void;
}>;
// string

type T21 = Bar<{
  a: (x: string) => void;
  b: (x: number) => void;
}>;
// string & number
// `string & number` equals `never`.
