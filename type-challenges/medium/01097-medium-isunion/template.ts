// type IsUnion<T, Copy = T> =
//   [T] extends [never]
//   ? false 
//   : T extends never
//     ? false
//     : [Copy] extends [T]
//       ? false
//       : true
// ;

// ==== Alternatives ====
// https://github.com/type-challenges/type-challenges/issues/1140
// type IsUnion<T, Copy = T> =
//   (
//     T extends T
//     ? Copy extends T
//       ? true
//       : unknown
//     : never
//   ) extends true
//   ? false
//   : true
// ;

type _IsUnion<T, Copy = T> =
  [T extends infer X ? Exclude<Copy, X> : never] extends [never]
  ? false
  : true;

type IsUnion<T> = _IsUnion<T>;

// test 型別為 'b'
// type test = string extends infer X
//   ? Exclude<string | number, X> extends [never]
//     ? 'a'
//     : 'b'
//   : 'BB';
