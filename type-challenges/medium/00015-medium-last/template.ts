// 使用 infer，如果 Tail 存在就 return Tail 否則 never
type Last<T extends any[]> = T extends [...any[], infer Tail] ? Tail : never;

// 利用填充陣列長度的方式來取得最後一個元素的型別
// 註：必須用 never 當作填充元素，不然在空陣列情況下會有問題
// type Last<T extends any[]> = [never, ...T][T['length']];
