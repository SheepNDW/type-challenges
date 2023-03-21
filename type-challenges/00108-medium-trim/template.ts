// type Trim<S extends string> = S extends `${Whitespace}${infer U}`
//   ? Trim<U>
//   : S extends `${infer K}${Whitespace}`
//   ? Trim<K>
//   : S;

type Trim<S extends string> = S extends `${Whitespace}${infer T}` | `${infer T}${Whitespace}`
  ? Trim<T>
  : S;
