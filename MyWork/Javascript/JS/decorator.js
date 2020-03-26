let worker = {
    slow(min, max) {
        console.log(arguments[0]);
        console.log([].join.call(arguments,"|"));
      console.log(typeof arguments);
      console.log(`Called with ${min},${max}`);
      return min + max;
    }
  };
  
  function cachingDecorator(func, hash) {
    let cache = new Map();

    return function() {
      let key = hash(arguments); // (*)
      console.log(arguments);
      if (cache.has(key)) {
        return cache.get(key);
      }
  
      let result = func.apply(this, arguments); // (**)
      console.log(result);
      cache.set(key, result);
      return result;
    };
  }

  function hash(args) {
    return args[0] + ',' + args[1];
  }
  
  worker.slow = cachingDecorator(worker.slow, hash);
  
  console.log(worker.slow.toString());
  console.log( worker.slow(3, 5) ); // works
//   console.log( "Again " + closure(3, 5) ); // same (cached)

console.log([1,2,3,4].join("-"));