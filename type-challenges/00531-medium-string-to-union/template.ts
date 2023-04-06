type StringToUnion<T extends string> = 
  T extends `${infer Head}${infer Tail}`
  ? Head | StringToUnion<Tail>
  : never
;

// ==== Alternatives ====
// type StringToUnion<
//   T extends string,
//   Acc extends string[] = []
// > =
//   T extends `${infer Head}${infer Tail}`
//   ? StringToUnion<Tail, [...Acc, Head]>
//   : Acc[number]
// ;

// use tail recursion
// type StringToUnion<
//   T extends string,
//   R = never
// > =
//   T extends `${infer Head}${infer Tail}`
//   ? StringToUnion<Tail, R | Head>
//   : R
// ;
