function sumOfOther(array) {
  const amount = array.reduce((sum, val) => sum + val);
  return array.map(val => amount - val);
}

sumOfOther([2, 3, 4, 1]);
