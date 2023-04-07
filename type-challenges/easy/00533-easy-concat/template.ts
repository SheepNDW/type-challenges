type Concat<T extends Array<unknown>, U extends Array<unknown>> = [...T, ...U];

// js
function Concat(arrA, arrB) {
  return [...arrA, ...arrB];
}

// infer spread
// first -> [1,2,3] -> 1
// tail -> [1,2,3] -> 3
/* type myArr = [1, 2, 3];

type FirstOfArray<T extends unknown[]> = T extends [infer First, ...any[]] ? First : [];
type t1 = FirstOfArray<myArr>;

type TailOfArray<T extends unknown[]> = T extends [...any[], infer Tail] ? Tail : [];
type t2 = TailOfArray<myArr>; */
