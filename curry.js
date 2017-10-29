function sumNums(...args) {
  return args.reduce((memo, num) => memo + num)
}
// write a method, `myCurry(fn, object, numArgs)`, that curries the
// function. Remember that a curried function is invoked with one argument at a
// time. For example, the curried form of `sum(1, 2, 3)` would be written as
// `curriedSum(1)(2)(3)`. After `numArgs` have been passed in, invoke the
// original `fn` with the accumulated arguments, using `object` as the
// context.
function myCurry(fn, object, numArgs) {
  const args = [];

  const _curry = (newArg) => {
    args.push(newArg);
    if (args.length === numArgs) {
      return fn.apply(object, args);
    } else {
      return _curry;
    }
  };

  return _curry;
}

function curry(fn, object, numArgs) {
  const args = []

  const _curry = function(arg) {
    args.push(arg)
    if (args.length >= numArgs) {
      return fn.apply(object, args)
    } else {
      return _curry
    }
  }

  return _curry
}

console.log(sumNums(1,2,3));
const curriedSumNums = curry(sumNums, {}, 3)
console.log(curriedSumNums(1));
console.log(curriedSumNums(2));
console.log(curriedSumNums(3));

Function.prototype.curry = function (context, numArgs) {
  const args = []

  const _curry = (arg) => {
    args.push(arg)
    if (args.length >= numArgs) {
      return this.apply(context, args)
    } else {
      return _curry
    }
  }

  return _curry
};

console.log('#######');
const arr = [1,2,3]
console.log(arr.concat([4,5],[6,7]));
const curriedConcat = arr.concat.curry(arr, 3)
console.log(curriedConcat([4,5,6]));
console.log(curriedConcat([7,8,9]));
console.log(curriedConcat([10,11,12]));
