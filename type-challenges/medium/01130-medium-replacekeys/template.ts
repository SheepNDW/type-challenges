type ReplaceKeys<T, U, V> = {
  [P in keyof T]:
    P extends U
    ? P extends keyof V
      ? V[P]
      : never
    : T[P]
};

// 1. mapped 所有 T 的 key，如果 P 不是要更新的 flag (U)，直接回傳它的值
// 2. 如果 P 符合 U，則對這個 P 進行判斷其是否包含在 V 的屬性中
// 3. 符合就回傳 V[P]，不符合直接回傳 never
