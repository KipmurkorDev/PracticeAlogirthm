// Given a sequence of  integers,  where each element is distinct and satisfies . For each  where , that is  increments from  to , find any integer  such that  and keep a history of the values of  in a return array.

function permutationEquation(p) {
  // Write your code here
  const n = p.length;
  const result = [];
  const indexMap = new Map();

  for (let i = 0; i < n; i++) {
    indexMap.set(p[i], i + 1);
  }

  for (let x = 1; x <= n; x++) {
    const index_x = indexMap.get(x);
    const y = indexMap.get(index_x);
    result.push(y);
  }

  return result;
}
