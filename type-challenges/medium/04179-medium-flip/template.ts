type Flip<
  T extends Record<PropertyKey, string | number | boolean>
> = {
  [P in keyof T as `${T[P]}`]: P
};
