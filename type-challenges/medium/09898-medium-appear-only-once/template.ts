/**
 * 思路：
 * #1 從第一個元素開始遍歷，如果已經結束遍歷，則回傳結果
 * #2 判斷目前元素是否在剩下的元素中出現過，如果有就將元素加入 Old 中，並繼續遍歷
 * #3 如果沒有出現過，則將元素加入 R 和 Old 中，並繼續遍歷
 */

// type FindEles<
//   T extends unknown[],
//   R extends unknown[] = [],
//   Old extends unknown[] = []
// > =
//   T extends [infer First, ...infer Rest]
//   ? First extends [...Rest, ...Old][number]
//     ? FindEles<Rest, R, [...Old, First]>
//     : FindEles<Rest, [...R, First], [...Old, First]>
//   : R
// ;

// ==== Alternatives ====

/**
 * 思路：
 * #1 使用一個 Duplicates 來記錄已經出現過的元素
 * #2 取得第一個元素，檢查是否在 Duplicates 中，如果有就將 First 從陣列中移出，並繼續遍歷
 * #3 接這檢查 First 是否在剩下的元素 Rest 中出現過，如果有就將 First 加進 Duplicates 中，並繼續遍歷 Rest
 * #4 如果 First 沒有在 Duplicates 和 Rest 中出現過，則將 First 加進結果中，並繼續處理剩下的元素
 */

type FindEles<
  T extends unknown[],
  Duplicates = never
> =
  T extends [infer First, ...infer Rest]
  ? First extends Duplicates
    ? FindEles<Rest, Duplicates>
    : First extends Rest[number]
      ? FindEles<Rest, Duplicates | First>
      : [First, ...FindEles<Rest, Duplicates>]
  : []
;
