type MyAwaited<T extends PromiseLike<any>> = T extends PromiseLike<infer P>
  ? P extends PromiseLike<unknown>
    ? MyAwaited<P>
    : P
  : never;


// type MyAwaited<T extends object> = T extends Promise<infer P>
//   ? P extends Promise<any>
//     ? MyAwaited<P>
//     : P
//   : T extends object & {
//       then: (onfulfilled: (arg: infer P) => any) => any;
//     }
//   ? P
//   : never;
