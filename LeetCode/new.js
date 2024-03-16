function memoize(fn) {
    const cache = {};
    const getCount = () => Object.keys(cache).length;
  
    return function (...args) {
      const key = JSON.stringify(args);
      if (cache.hasOwnProperty(key)) {
        console.log("getCallCount");
        return cache[key];
      } else {
        console.log("call");
        const result = fn(...args);
        cache[key] = result;
        return result;
      }
    };
  }
  
  const sum = (a, b) => a + b;
  const fib = (n) => (n <= 1 ? 1 : fib(n - 1) + fib(n - 2));
  const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));
  
  function test(fnName, actions, values) {
    let results = [];
    let memoizedFn;
  
    if (fnName === "sum") memoizedFn = memoize(sum);
    else if (fnName === "fib") memoizedFn = memoize(fib);
    else if (fnName === "factorial") memoizedFn = memoize(factorial);
  
    for (let i = 0; i < actions.length; i++) {
      const action = actions[i];
      if (action === "call") {
        results.push(memoizedFn(...values[i]));
      } else if (action === "getCallCount") {
        results.push(memoizedFn.getCount());
      }
    }
  
    return results;
  }
  
  // Example 1:
  let fnName = "sum";
  let actions = ["call", "call", "getCallCount", "call", "getCallCount"];
  let values = [[2, 2], [2, 2], [], [1, 2], []];
  console.log(test(fnName, actions, values)); // Output: [4,4,1,3,2]
  
  // Example 2:
  fnName = "factorial";
  actions = ["call", "call", "call", "getCallCount", "call", "getCallCount"];
  values = [[2], [3], [2], [], [3], []];
  console.log(test(fnName, actions, values)); // Output: [2,6,2,2,6,2]
  