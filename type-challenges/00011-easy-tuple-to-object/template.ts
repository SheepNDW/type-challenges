type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [P in T[number]]: P;
};

// js
function tupleToObject(array) {
  const obj = {};

  array.forEach((val) => {
    obj[val] = val;
  });

  return obj;
}

// 1. return a object
// 2. iterate array T[number]
