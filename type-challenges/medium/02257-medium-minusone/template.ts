// this one cannot passes MinusOne<9_007_199_254_740_992>
type Tuple<
  N extends number,
  T extends unknown[] = []
> = 
  0 extends 1
  ? never
  : T["length"] extends N
    ? T
    : Tuple<N, [...T, unknown]>;

type MinusOne<T extends number> =
  Tuple<T> extends [unknown, ...infer Rest]
  ? Rest["length"]
  : -1;

// ==== Alternatives ====
// this one passes MinusOne<9_007_199_254_740_992>
// type OneLess = {
//   readonly "9": "8";
//   readonly "8": "7";
//   readonly "7": "6";
//   readonly "6": "5";
//   readonly "5": "4";
//   readonly "4": "3";
//   readonly "3": "2";
//   readonly "2": "1";
//   readonly "1": "0";
// };

// type MinusOne<
//   T extends number | string,
//   Digits extends string[] = [],
//   Processed extends string[] = [],
//   Rejoined extends string = ""
// > = 
//   `${T}` extends `${infer First}${infer Remainder}`
//   // STAGE 1: split the 
//   ? MinusOne<Remainder, [...Digits, First]>

//   // STAGE 2: process each digits
//   : Digits extends [
//       ...infer OtherDigits extends string[],
//       infer RightMostDigit
//     ]
//   ? RightMostDigit extends keyof OneLess
//     // When not 0
//     ? MinusOne<
//         "",
//         [],
//         [
//           ...OtherDigits,
//           OneLess[RightMostDigit],
//           ...Processed
//         ]
//       >
//     // When 0
//     : MinusOne<
//         "",
//         OtherDigits,
//         ["9", ...Processed]
//       >
//   // STAGE 3: Join digits into a string.
//   : Processed extends [
//       infer First extends string,
//       ...infer Remainder extends string[]
//     ]
//     ? MinusOne<"", [], Remainder, `${Rejoined}${First}`>
//     // STAGE 4: Handle edge cases and return result
//     : Rejoined extends "9"
//       // When it was 0 turned into 9
//       ? -1
//       : Rejoined extends `0${infer Answer extends number}`
//         // When the left most digit is 0
//         ? Answer
//         : Rejoined extends `${infer Answer extends number}`
//           // Convert to number
//           ? Answer
//           : never;
