type If<C extends Boolean, T, F> = C extends true ? T : F;

// js
function If(C, T, F) {
  return C ? T : F;
}

// null 在嚴格模式與非嚴格模式的區別
// https://www.typescriptlang.org/docs/handbook/type-compatibility.html#any-unknown-object-void-undefined-null-and-never-assignability
