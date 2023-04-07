type MyParameters<T extends (...args: any[]) => any> = T extends (...arg: infer X) => any
  ? X
  : never;

// infer
