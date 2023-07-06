type CheckRepeatedChars<T extends string> =
  T extends `${infer Head}${infer Tail}`
  ? Tail extends `${string}${Head}${string}`
    ? true
    : CheckRepeatedChars<Tail>
  : false
;

// 從頭開始比對，如果 Tail 中有重複的字元，就回傳 true
