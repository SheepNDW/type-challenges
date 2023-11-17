type IsLetter<S extends string> = Uppercase<S> extends Lowercase<S> ? false : true;

type CamelCase<
  S extends string,
  Result extends string = ''
> = 
  S extends `${infer Left}${infer Rest}` 
  ? IsLetter<Left> extends true
    ? Result extends `${infer Prefix}_`
      ? CamelCase<Rest, `${Prefix}${Uppercase<Left>}`>
      : CamelCase<Rest, `${Result}${Lowercase<Left>}`>
    : CamelCase<Rest, `${Result}${Left}`>
  : Result
;
