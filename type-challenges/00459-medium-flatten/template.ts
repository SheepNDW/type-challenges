type Flatten<T extends unknown[]> =
  T extends [infer Head, ...infer Rest]
  ? Head extends unknown[]
    ? [...Flatten<Head>, ...Flatten<Rest>]
    : [Head, ...Flatten<Rest>]
  : []
;

// Alternatives
// type Flatten<
//   T extends unknown[],
//   U extends unknown[] = []
// > =
//   T extends [infer Head, ...infer Tail]
//   ? Head extends unknown[]
//     ? Flatten<[...Head, ...Tail], U>
//     : Flatten<[...Tail], [...U, Head]>
//   : U
// ;

// type Flatten<T extends unknown[]> =
//   T extends [infer Head, ...infer Rest]
//   ? [
//       ...(
//         Head extends unknown[]
//         ? Flatten<Head>
//         : [Head]
//       ),
//       ...Flatten<Rest>
//     ]
//   : []
// ;
