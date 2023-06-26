// type NumberRange<
//   L extends number, 
//   H extends number,
//   Count extends 1[] = [],
//   Output = never
// > =
//   Count['length'] extends L
//   ? Count['length'] extends H
//     ? Output | H
//     : NumberRange<
//       [...Count, 1]['length'],
//       H,
//       [...Count, 1],
//       Output | Count['length']
//     >
//   : NumberRange<L, H, [...Count, 1], Output>
// ;

// ==== Alternatives ====

// type NumberRange<
//   L extends number,
//   H extends number,
//   Acc extends number[] = [],
// > =
//   Acc['length'] extends H
//   ? [...Acc, H][number]
//   : Acc['length'] extends L
//     ? NumberRange<number, H, [...Acc, Acc['length']]>
//     : NumberRange<L, H, [...Acc, L]>
// ;

// MinusOne 
// reference: 02257-medium-minusone
type NumberRange<
  L extends number,
  H extends number,
  Acc extends number[] = [L],
> =
  L extends H
  ? Acc[number]
  : NumberRange<L, MinusOne<H>, [...Acc, H]>
;
