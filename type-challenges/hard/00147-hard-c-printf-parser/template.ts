type ControlsMap = {
  c: 'char'
  s: 'string'
  d: 'dec'
  o: 'oct'
  h: 'hex'
  f: 'float'
  p: 'pointer'
}

// type ParsePrintFormat<T extends string> = 
//   T extends `${infer _}${infer Rest}`
//   ? T extends `${infer Head}%${infer Control}${infer Tail}`
//     ? Control extends keyof ControlsMap
//       ? [ControlsMap[Control], ...ParsePrintFormat<Tail>]
//       : ParsePrintFormat<Tail>
//     : ParsePrintFormat<Rest>
//   : []
// ;

// ==== Alternatives ====
// type ParsePrintFormat<T extends string> =
//   T extends `${string}%${infer Control extends keyof ControlsMap}${infer Tail}`
//   ? [ControlsMap[Control], ...ParsePrintFormat<Tail>]
//   : T extends `${string}%${string}${infer Rest}`
//     ? ParsePrintFormat<Rest>
//     : [];


// @teamchong
type ParsePrintFormat<T extends string> =
  // Get First 2 characters: %C
  T extends `%${infer C extends keyof ControlsMap}${infer Rest}`
  ? [ControlsMap[C], ...ParsePrintFormat<Rest>]

    // Get First 2 characters: %?
  : T extends `%${string}${infer Rest}`
    ? ParsePrintFormat<Rest>
    
    // Get Next %? ${string}${string} to avoid matching string ends with %
    : T extends `${string}%${string}${string}` & `${string}%${infer Rest}`
      ? ParsePrintFormat<`%${Rest}`>
      : [];
