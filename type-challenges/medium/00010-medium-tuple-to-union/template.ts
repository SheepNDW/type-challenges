// type TupleToUnion<T> = T extends unknown[] ? T[number] : never;

// type TupleToUnion<T> = T[number & symbol & string];

type TupleToUnion<T> = T extends (infer R)[] ? R : never;
