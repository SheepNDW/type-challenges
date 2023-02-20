type Length<T extends readonly any[]> = T['length'];

// js
function getLength(arr) {
  if (!Array.isArray(arr)) return;
  return arr.length;
}
