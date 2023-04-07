// type Permutation<T, Acc = T> = [T] extends [never]
//   ? []
//   : Acc extends T
//   ? [Acc, ...Permutation<Exclude<T, Acc>>]
//   : [];
// ;

// prettier-ignore
type Permutation<T, K = T> = 
  [T] extends [never]
    ? []
    : K extends K
      ? [K, ...Permutation<Exclude<T, K>>]
      : never
;

// more detail: https://github.com/type-challenges/type-challenges/issues/614
// how to loop union:
type LoopUnion<Union extends string, Item extends string = Union> = Item extends Item
  ? `loop ${Item}`
  : never;
type result = LoopUnion<'A' | 'B' | 'C'>;
