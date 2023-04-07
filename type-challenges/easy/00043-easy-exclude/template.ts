type MyExclude<T, U> = T extends U ? never : T;

// type t1 = 'a' | 'b' | 'c';
// type t2 = 'a';
// type t3 = MyExclude<t1, t2>;

// js
// ['a', 'b', 'c']
// ['a']
// function myExclude(T, U) {
//   const result = [];

//   for (let i = 0; i < T.length; i++) {
//     const t = T[i];

//     // let bool = false;
//     // for (let j = 0; j < U.length; j++) {
//     //   const u = U[j];
//     //   if (t === u) {
//     //     bool = true;
//     //   }
//     // }
//     // if (!bool) {
//     //   result.push(t);
//     // }

//     if (!U.includes(t)) {
//       result.push(t);
//     }
//   }

//   return result;
// }
