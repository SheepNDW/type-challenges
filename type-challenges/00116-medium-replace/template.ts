// prettier-ignore
type Replace0<
  T extends string, 
  From extends string, 
  To extends string
> = From extends ""
    ? T
    : T extends `${From}${infer Tail}`
      ? `${To}${Tail}`
      : T extends `${infer Head}${infer Tail}`
        ? `${Head}${Replace<Tail, From, To>}`
        : T
;

// Alternatives
// prettier-ignore
type Replace<
  T extends string,
  From extends string,
  To extends string
> =
  From extends ""
  ? T
  : T extends `${infer L}${From}${infer R}`
    ? `${L}${To}${R}`
    : T
;
