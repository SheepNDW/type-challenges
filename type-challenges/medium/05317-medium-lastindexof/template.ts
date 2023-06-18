type LastIndexOf<
  T extends unknown[], 
  U
> =
  T extends [...infer Head, infer Tail]
  ? isEqual<Tail, U> extends true
    ? Head['length']
    : LastIndexOf<Head, U>
  : -1
;
