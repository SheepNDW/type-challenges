type First<T extends any[]> = T extends [infer First, ...infer Rest] ? First : never;

// 1. 使用 extends 去限制泛型，判斷是不是一個空陣列型別 -> extends + 型別判斷
// type First<T extends any[]> = T extends [] ? never : T[0];

// 2. 拿到 length 屬性，如果是 0 代表沒有 -> indexed
// type First<T extends any[]> = T['length'] extends 0 ? never : T[0];

// 3. 看看第一個值在不在 union 中 -> extends union
// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never;

// 4. infer
// type First<T extends any[]> = T extends [infer First, ...infer Rest] ? First : never;
