function make() {
  let masOfArguments = [];
  for (let i = 0; i < arguments.length; i++) {
    masOfArguments.push(arguments[i]);
  }
  function total() {
    if (typeof arguments[0] == "function") {
      const func = arguments[0];
      return masOfArguments.reduce((acc, val) => {
        return func(acc, val);
      });
    } else {
      for (let i = 0; i < arguments.length; i++) {
        masOfArguments.push(arguments[i]);
      }
    }
    return total;
  }
  return total;
}

make(15)(34, 21, 666)(41)(sum);

function sum(a, b) {
  return a + b;
}

function ik(a, b) {
  return a - b;
}
