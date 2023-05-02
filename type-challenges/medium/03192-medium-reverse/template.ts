type Reverse<T extends unknown[]> =
  T extends [...infer Head, infer Tail]
  ? [Tail, ...Reverse<Head>]
  : [];
