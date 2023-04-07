/* 對 map 後的型別做判斷 */
// type DeepReadonly<T> = {
//   readonly [P in keyof T]: T[P] extends Function ? T[P] : DeepReadonly<T[P]>;
// };

// type DeepReadonly<T> = {
//   readonly [P in keyof T]: keyof T[P] extends never ? T[P] : DeepReadonly<T[P]>;
// };

/* 直接對 T 做條件判斷 */
// type DeepReadonly<T> = T extends Function ? T : { readonly [P in keyof T]: DeepReadonly<T[P]> };
type DeepReadonly<T> = T extends object & { call?(): never }
  ? {
      readonly [P in keyof T]: DeepReadonly<T[P]>;
    }
  : T;

/*

1. You can assign anything to `{}`, *except* for `null` and `undefined`.
2. You can assign anything that's *not a primitive* to `object`.
  - Primitives are strings, booleans, numbers, bigints, symbols, `null` and `undefined`
3. You can only assign *objects* to `Record<string, unknown>`

| Value is assignable to | {}  | object | Record<string, unknown> |
| ---------------------- | --- | ------ | ----------------------- |
| null                   | No  | No     | No                      |
| undefined              | No  | No     | No                      |
| "string"               | Yes | No     | No                      |
| 42                     | Yes | No     | No                      |
| 42n                    | Yes | No     | No                      |
| Symbol()               | Yes | No     | No                      |
| true                   | Yes | No     | No                      |
| () => {}               | Yes | Yes    | No                      |
| [1, 2]                 | Yes | Yes    | No                      |
| []                     | Yes | Yes    | No                      |
| {foo: "bar"}           | Yes | Yes    | Yes                     |
| {}                     | Yes | Yes    | Yes                     |

*/

// also check: https://stackoverflow.com/questions/68693054/what-is-extends-never-used-for
