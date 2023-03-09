type MyReadonly2<T, K extends keyof T = keyof T> = Omit<T, K> & {
  readonly [P in keyof T]: T[P];
};

// Omit<Type, Keys> 從 Type 中去除 Keys
// & operater: 取交集
