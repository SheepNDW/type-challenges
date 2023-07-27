type ToPrimitive<T> = T extends object
  ? T extends (...args: unknown[]) => unknown
    ? Function
    : {
      [K in keyof T]: ToPrimitive<T[K]>
    }
  : T extends { valueOf: () => infer R } ? R : T;

// type Primitive = number | boolean | string | bigint | symbol;

// type ToPrimitive<T, P = Primitive> = T extends (...args: any[]) => unknown
//   ? Function
//   : T extends Record<keyof any, any>
//   ? {
//       [K in keyof T]: ToPrimitive<T[K]>;
//     }
//   : P extends P
//   ? T extends P
//     ? P extends boolean
//       ? boolean
//       : P
//     : never
//   : never;
