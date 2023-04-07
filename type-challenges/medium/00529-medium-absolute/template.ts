// type Absolute<T extends number | string | bigint> = 
//   `${T}` extends `-${infer U}`
//   ? U
//   : `${T}`
// ;

// Alternatives
type Absolute<T extends number | string | bigint> = 
  T extends string
  ? T extends `-${infer Rest}`
    ? Rest
    : T
  : Absolute<`${T}`>
;
