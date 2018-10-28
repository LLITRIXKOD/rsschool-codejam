const tree = {
  value: 100,
  left: { value: 90, left: { value: 70 }, right: { value: 99 } },
  right: {
    value: 120,
    left: { value: 110 },
    right: { value: 130 },
  },
};

const obj = {};
let deep = 0;
function recursion(currentTree) {
  for (const key in currentTree) {
    if (key === 'value') {
      if (Object.prototype.hasOwnProperty.call(obj, deep) === false) {
        obj[deep] = [];
      }
      obj[deep].push(currentTree[key]);
      deep += 1;
    } else {
      recursion(currentTree[key]);
    }
  }
  deep -= 1;
  if (deep === 0) {
    const result = Object.values(obj);
    return result;
  }
  return 0;
}

console.log(recursion(tree));
