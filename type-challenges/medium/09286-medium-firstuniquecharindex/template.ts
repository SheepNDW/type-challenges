type FirstUniqueCharIndex<
  T extends string,
  Acc extends string[] = []
> =
  T extends ''
  ? -1
  : T extends `${infer F}${infer Rest}`
    ? F extends Acc[number]
      ? FirstUniqueCharIndex<Rest, [...Acc, F]>
      : Rest extends `${string}${F}${string}`
        ? FirstUniqueCharIndex<Rest, [...Acc, F]>
        : Acc['length']
    : never
;

/**
 * 思路：
 * #1 準備一個 Acc 用來存放已經出現過的字元，並且透過讀取 'length' 來取得索引
 * #2 如果 T 是空字串，則回傳 -1
 * #3 如果 T 不是空字串，則取出第一個字元 F，並且取出剩下的字串 Rest
 * #4-1 如果 F 已經出現在 Acc 中，則將 F 加入 Acc，並且將 Rest 丟回 FirstUniqueCharIndex
 * #4-2-1 如果 F 沒有出現在 Acc 中，則檢查 Rest 是否還有 F，如果有則將 F 加入 Acc，並且將 Rest 丟回 FirstUniqueCharIndex
 * #4-2-2 如果 F 沒有出現在 Acc 中，且 Rest 沒有 F，則回傳 Acc 的長度
 */
