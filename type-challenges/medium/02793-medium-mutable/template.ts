type Mutable<T extends Record<PropertyKey, any>> = {
  -readonly [P in keyof T]: T[P]
};
