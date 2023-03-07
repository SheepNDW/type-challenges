type MyReturnType<T> = T extends (...arg: any[]) => infer R ? R : never;

// 原生 ReturnType
// type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
