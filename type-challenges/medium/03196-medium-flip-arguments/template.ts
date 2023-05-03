type FlipArguments<
  T extends (...args: any[]) => any
> = (...args: Reverse<Parameters<T>>) => ReturnType<T>;

// ==== Alternatives ====
/* type FlipArguments<
  T extends (...args: any[]) => any
> =
  T extends (...args: infer A) => infer R
  ? (...args: Reverse<A>) => R
  : never; */

/* type FlipArguments<
  T extends (...args: any[]) => any,
  Acc extends any[] = []
> =
  T extends (...args: infer A) => infer R
  ? A extends [infer Head, ...infer Tail]
    ? FlipArguments<(...args: Tail) => R, [Head, ...Acc]>
    : (...args: Acc) => R
  : never; */
