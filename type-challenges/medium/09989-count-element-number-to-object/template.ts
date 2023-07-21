// Reference to: @jazelly's solution

type Flat<T extends unknown[]> =
  T extends [infer First, ...infer Rest]
  ? First extends unknown[]
    ? [...Flat<First>, ...Flat<Rest>]
    : [First, ...Flat<Rest>]
  : []
;

// Get an initial object containing all the keys
type Mapping<T extends unknown[]> = {
  [P in T[number] as P extends PropertyKey ? P : never]: []
}

// Core logic to iterate the tuple and recursively increment the mapped tuple associated with a specific key
type GetTupledObject<
  T extends unknown[],
  Dump extends Record<PropertyKey, unknown[]> = Mapping<Flat<T>>
> =
  T extends [infer F, ...infer R]
  ? F extends unknown[]
    ? GetTupledObject<F, Dump>
    : F extends PropertyKey
      ? GetTupledObject<R, {
        [P in keyof Dump]: P extends F ? [...Dump[P], F] : Dump[P]
      }>
      : {}
  : Dump
;

type CountElementNumberToObject<T extends unknown[]> =
  GetTupledObject<T> extends infer Obj
  ? [Obj] extends [never]
    ? {}
    : {
      [P in keyof Obj]: Obj[P] extends unknown[] ? Obj[P]['length'] : never
    }
  : never
;

/**
 * 思路：
 * #1 先設計一個可以將陣列展平的 Flat，以及將陣列轉換成我們想要的物件模型的 Mapping
 * #2 遍歷陣列記錄每個元素出現的次數，陣列 T 中的每一個元素 F 如果是陣列，則遞迴處理，
 *    如果是合法的 key 則將 F 加入到 Dump 對應的屬性中，並繼續遍歷剩下的元素。
 * #3 計算每個屬性中的元素個數，並將結果回傳
 */
