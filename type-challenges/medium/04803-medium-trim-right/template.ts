type TrimRight<S extends string> =
  S extends `${infer U}${Whitespace}` 
  ? TrimRight<U> 
  : S;
