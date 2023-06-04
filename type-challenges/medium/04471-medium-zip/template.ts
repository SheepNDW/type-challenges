type Zip<
  T extends unknown[], 
  U extends unknown[],
> =
  [T, U] extends [
    [infer THead, ...infer TTail],
    [infer UHead, ...infer UTail]
  ]
  ? [[THead, UHead], ...Zip<TTail, UTail>]
  : [];
