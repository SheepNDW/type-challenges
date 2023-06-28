type Combination<
  T extends string[],
  U = T[number],
  Acc = U
> =
  Acc extends string
  ? Acc | `${Acc} ${Combination<[], Exclude<U, Acc>>}`
  : never
;

//type X = ['foo', 'bar', 'baz'][number]
//     ^? type X = 'foo' | 'bar' | 'baz'
