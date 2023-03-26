// type AppendArgument<Fn extends (...args: any[]) => unknown, A> = (
//   ...args: [...Parameters<Fn>, A]
// ) => ReturnType<Fn>;

// Alternatives
type AppendArgument<T extends (...args: any[]) => unknown, U> = T extends (
  ...args: infer A
) => infer R
  ? (...args: [...A, U]) => R
  : never;
