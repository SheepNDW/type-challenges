type Curry<Args extends unknown[], R> =
  Args extends [infer Head, ...infer Tail]
  ? (arg: Head) => Curry<Tail, R>
  : R
;

declare function Currying<T extends Function>(fn: T):
  T extends (...args: infer Args) => infer R
  ? Args extends []
    ? () => R
    : Curry<Args, R>
  : never
;

/**
 * 思路：
 * #1 檢查 T 是否為函式，如果不是則回傳 never
 * #2 檢查 T 的參數，如果參數為空，則回傳 () => R
 * #3 如果參數不為空，則回傳一個新的函式，該函式的參數為第一個參數，回傳值為 Curry<剩餘參數, 回傳值>
 * #4 建立一個實作 #3 的 helper type Curry，傳入函式 T 的參數和回傳值
 */

// ==== Alternatives ====

type Curry1<T extends Function> =
  T extends (
    first: infer First,
    ...rest: infer Rest
  ) => infer Return
  ? Rest['length'] extends 0
    ? T
    : (arg: First) => Curry1<(...args: Rest) => Return>
  : never
;

declare function Currying1<T extends Function>(fn: T): Curry1<T>; 

/**
 * 思路：
 * #1 建立一個 helper type Curry，傳入一個函式
 * #2 Curry 會檢查函式的參數，如果參數只有一個，則回傳該函式
 * #3 如果參數超過一個，則回傳一個新的函式，該函式的參數為第一個參數，回傳值為 Curry<剩餘參數, 回傳值>
 * #4 重複 #3，直到參數只剩一個
 */
