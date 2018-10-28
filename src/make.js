module.exports = function make(...args) {
  const masOfArgs = [];
  for (let i = 0; i < args.length; i += 1) {
    masOfArgs.push(args[i]);
  }
  function total(...argsTotal) {
    if (typeof argsTotal[0] === 'function') {
      const func = argsTotal[0];
      return masOfArgs.reduce((acc, val) => func(acc, val));
    }
    for (let i = 0; i < argsTotal.length; i += 1) {
      masOfArgs.push(argsTotal[i]);
    }

    return total;
  }
  return total;
};
