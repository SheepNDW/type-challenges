type MyOmit<T, K extends keyof T> = {
  [Key in Exclude<keyof T, K>]: T[Key];
};

// built-in Omit:
// type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
