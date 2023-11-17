type CapitalizeWords<
  T extends string,
  Prev extends string = ""
> =
  T extends `${infer Head}${infer Tail}`
  ? Head extends Capitalize<Head>

    // Head is already capitalized or not a letter
    ? Head extends Uncapitalize<Head>

      // Head is not a letter
      // Capitalize the string before
      //   Head (Prev) and verify the Rest
      ? `${Capitalize<Prev>}${Head}${CapitalizeWords<Tail>}`

      // Head is a capitalized letter
      : CapitalizeWords<Tail, `${Prev}${Head}`>

      // Head is a uncapitalized letter
      // Add it to Temp and verify the Rest
    : CapitalizeWords<Tail, `${Prev}${Head}`>

  : Capitalize<Prev>;

// type CapitalizeWords<
//   S extends string,
//   Prev extends string = '',
//   Acc extends string = ''
// > =
//   S extends `${infer Head}${infer Tail}`
//   ? Prev extends Uppercase<Prev>
//     ? Prev extends Lowercase<Prev>
//       ? CapitalizeWords<Tail, Head, `${Acc}${Capitalize<Head>}`>
//       : CapitalizeWords<Tail, Head, `${Acc}${Head}`>
//     : CapitalizeWords<Tail, Head, `${Acc}${Head}`>
//   : Capitalize<Acc>;
// ;
