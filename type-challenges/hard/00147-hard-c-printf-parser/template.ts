type ControlsMap = {
  c: 'char'
  s: 'string'
  d: 'dec'
  o: 'oct'
  h: 'hex'
  f: 'float'
  p: 'pointer'
}

type ParsePrintFormat<T extends string> = 
  T extends `${infer _}${infer Rest}`
  ? T extends `${infer Head}%${infer Control}${infer Tail}`
    ? Control extends keyof ControlsMap
      ? [ControlsMap[Control], ...ParsePrintFormat<Tail>]
      : ParsePrintFormat<Tail>
    : ParsePrintFormat<Rest>
  : []
;
