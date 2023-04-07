/*
#1
type Chainable<T = object> = {
  option(key: string, value: any): any;
  get(): T; // type return
}

#2
type Chainable<T = object> = {
  option<K extends PropertyKey, V>( // provide generic
  key: K,
  value: V
  ): Chainable; // type return
  get(): T;
}

#3
type Chainable<T = object> = {
  option<K extends PropertyKey, V>(
    key: K extends keyof T ? never : K, // start filtering K
    value: V
    ): Chainable<T & Record<K, V>>;
    get(): T;
  }
*/

type Chainable<T = object> = {
  option<K extends PropertyKey, V>(
    key: K extends keyof T ? never : K,
    value: V
  ): Chainable<Omit<T, K> & Record<K, V>>; // Omit K from T
  get(): T;
};
