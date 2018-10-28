function recurse(tree, obj, deep) {
  for (const key in tree) {
    if (key === 'value') {
      if (Object.prototype.hasOwnProperty.call(obj, deep) === false) {
        obj[deep] = [];
      }
      obj[deep].push(tree[key]);
      deep += 1;
    } else {
      recurse(tree[key], obj, deep);
    }
  }
  deep -= 1;
  if (deep === 0) {
    const result = Object.values(obj);
    return result;
  }
  return 0;
}

module.exports = function recursion(tree) {
  const result = recurse(tree, {}, 0);
  return result;
};
