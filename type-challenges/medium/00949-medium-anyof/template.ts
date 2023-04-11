// 空陣列在 JS 中是 true，所以要定義在 Falsy 中
// Record<string, never> 用來定義空物件
type Falsy =
  | 0
  | ""
  | false
  | []
  | Record<string, never>
  | null
  | undefined
;

type AnyOf<T extends readonly unknown[]> =
  T[number] extends Falsy
  ? false
  : true
;

// ==== Alternatives ====
type AnyOf1<T extends unknown[]> =
  T extends [infer Head, ...infer Tail]
  ? Head extends Falsy
    ? AnyOf<Tail>
    : true
  : false
;
