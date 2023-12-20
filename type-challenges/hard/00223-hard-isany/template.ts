type IsAny<T> = 
  0 extends (1 & T) 
  ? true 
  : false
;

// ==== Alternatives ====

/*
1. Considering the first elements of the tuples,
   `{}` means "any non-nullish type", so the condition
   `{} extends T` is met when `T` is any or unknown or `{}`.

     - As of TypeScript 4.5.4, `{} extends T` is also `true`
       when all properties of `T` are optional
       (ex. `{ foo?: string }`).  Such types will be
       blocked by the second condition, though.

2. Considering the second elements of the tuples,

  - `unknown` is not assignable to anything
    (without a type assertion or narrowing)

  - `{}` is non-nullish

   so passing through the condition `T extends null`,
   those two types are filtered out.
   As a result, only `any` remains.
*/

type IsAny2<T> =
  [{}, T] extends [T, null]
  ? true
  : false
;

type IsAny3<T> =
  ((a: [any]) => [any]) extends (a: T) => [T]
  ? true
  : false
;
