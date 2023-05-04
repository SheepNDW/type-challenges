type FlattenOnce<
  T extends unknown[],
  Acc extends unknown[] = []
> =
  T extends [infer Head, ...infer Tail]
  ? Head extends unknown[]
    ? FlattenOnce<Tail, [...Acc, ...Head]>
    : FlattenOnce<Tail, [...Acc, Head]>
  : Acc;

type FlattenDepth<
  T extends unknown[],
  Depth extends number = 1,
  Count extends 1[] = []
> =
  Count['length'] extends Depth
  ? T
  : FlattenOnce<T> extends T
    ? T
    :  FlattenDepth<
        FlattenOnce<T>,
        Depth,
        [...Count, 1]
      >;

// NOTE: FlattenOnce<T> extends T: 如果已經攤平就直接回傳
