// declare function PromiseAll<T extends unknown[]>(
//   values: readonly [...T]
// ): Promise<{
//   [P in keyof T]: Awaited<T[P]>;
// }>;

// 手寫 helper type
type ExtractTypeOfPromise<T> = T extends PromiseLike<infer R> ? ExtractTypeOfPromise<R> : T;

declare function PromiseAll<T extends unknown[]>(
  values: readonly [...T]
): Promise<{
  [P in keyof T]: ExtractTypeOfPromise<T[P]>;
}>;
