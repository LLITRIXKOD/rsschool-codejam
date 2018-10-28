module.exports = function sumOfOther(array) {
  if (array.length === 0) {
    return [];
  }
  const amount = array.reduce((sum, val) => sum + val);
  return array.map(val => amount - val);
};
