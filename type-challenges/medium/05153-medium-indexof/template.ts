// same as Equal in @type-challenges/utils
type isEqual<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2 ? true : false;

type IndexOf<
  T extends unknown[], 
  U,
  Count extends 1[] = []
> =
  T extends [infer Head, ...infer Tail]
  ? isEqual<Head, U> extends true
    ? Count['length']
    : IndexOf<Tail, U, [...Count, 1]>
  : -1
;
