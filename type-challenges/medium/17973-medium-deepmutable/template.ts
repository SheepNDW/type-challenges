type DeepMutable<T extends object> = {
  -readonly [P in keyof T]:
    T[P] extends object // [] and fn also extend `object`
    ? T[P] extends Function
      ? T[P]
      : DeepMutable<T[P]>
    : T[P]
};

/**
 * 思路：
 * #1 使用 `-readonly` 移除 readonly 修飾符
 * #2 使用 `T[P] extends object` 來判斷是否為物件，如果不是物件就直接回傳
 * #3 如果是物件，再判斷是否為 function，如果是 function 就直接回傳
 * #4 如果不是 function，就再次使用 `DeepMutable` 來處理
 */

