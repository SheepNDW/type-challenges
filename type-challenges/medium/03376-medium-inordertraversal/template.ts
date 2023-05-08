interface TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
}
// type InorderTraversal<T extends TreeNode | null> =
//   T extends TreeNode
//   ? [
//       ...(
//         T['left'] extends TreeNode
//         ? InorderTraversal<T['left']>
//         : []
//       ),
//       T['val'],
//       ...(
//         T['right'] extends TreeNode
//         ? InorderTraversal<T['right']>
//         : []
//       )
//     ]
//   : [];

// ==== Alternatives ====
/* type InorderTraversal<
  T extends TreeNode | null,
  NT extends TreeNode = NonNullable<T>
> =
  T extends null
  ? []
  : [
    ...InorderTraversal<NT['left']>,
    NT['val'],
    ...InorderTraversal<NT['right']>
  ]; */

type InorderTraversal<T extends TreeNode | null> =
  // this allows skipping the null check
  // by blocking conditional type distributivity
  [T] extends [TreeNode]
  ? [
      ...InorderTraversal<T['left']>,
      T['val'],
      ...InorderTraversal<T['right']>
    ]
  : [];
