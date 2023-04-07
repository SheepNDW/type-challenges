// type LengthOfString<
//   S extends string, 
//   Acc extends string[] = []
// > = 
//   S extends `${string}${infer S}`
//   ? LengthOfString<S, [string, ...Acc]>
//   : Acc['length']
// ;

// Alternatives: StringToTuple
type StringToTuple<T extends string> =
  T extends `${T[0]}${infer Rest}`
  ? [T, ...StringToTuple<Rest>]
  : []
;
// type stringTuple = StringToTuple<'asdf'>; // ['asdf', 'sdf', 'df', 'f']

type LengthOfString<T extends string> = StringToTuple<T>['length']
