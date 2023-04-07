import { Equal } from '@type-challenges/utils';

export type Includes<T extends readonly any[], U> = T extends [infer First, ...infer Rest]
  ? Equal<First, U> extends true
    ? true
    : Includes<Rest, U>
  : false;

// js
// function Includes(list, key) {
//   for (let i = 0; i < list.length; i++) {
//     const element = list[i];
//     if (element === key) return true;
//   }
//   return false;
// }

function Includes(list, key) {
  function _(list, key) {
    if (list.length === 0) return false;
    const [first, ...rest] = list;
    if (first === key) return true;
    return _(rest, key);
  }
  return _(list, key);
}

// Tips: 利用遞迴遍歷陣列
// 使用模組語法後 TS 不會再將此型別視為全域，必須手動將其匯入匯出
