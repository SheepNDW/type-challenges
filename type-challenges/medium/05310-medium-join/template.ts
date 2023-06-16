type Join<
  T extends string[], 
  U extends string | number,
> =
  T extends [
    infer Head extends string, 
    ...infer Tail extends string[]
  ]
  ? `${Head}${Tail['length'] extends 0 ? '' : U}${Join<Tail, U>}`
  : ''
;
