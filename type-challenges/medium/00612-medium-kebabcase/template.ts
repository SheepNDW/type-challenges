// type KebabCase<S> =
//   S extends `${infer Head}${infer Tail}`
//   ? Tail extends Uncapitalize<Tail>
//     ? `${Uncapitalize<Head>}${KebabCase<Tail>}`
//     : `${Uncapitalize<Head>}-${KebabCase<Tail>}`
//   : S
// ;

// ==== Alternatives ====
type KebabCase<T extends string> =
  T extends `${infer Head}${infer Tail}`
  ? `${
      Lowercase<Head>
    }${
      Tail extends Uncapitalize<Tail>
      ? KebabCase<Tail>
      : `-${KebabCase<Tail>}`
    }`
  : T
;
