type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};

// js
/* function readonly(obj) {
  const result = {}

  for (const key in obj) {
    result['readonly'+key] = obj[key]
  }

  return result
} */

// 1. return object
// 2. iterate object (JS object, TS interface) (in -> mapped keyof -> lookup)
// 3. with the `readonly` keyword
// 4. getting the value of an obj(interface) through the key
