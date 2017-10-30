function sumNums(...args) {
  return args.reduce((memo, num) => memo + num)
}
// write a method, `myCurry(fn, object, numArgs)`, that curries the
// function. Remember that a curried function is invoked with one argument at a
// time. For example, the curried form of `sum(1, 2, 3)` would be written as
// `curriedSum(1)(2)(3)`. After `numArgs` have been passed in, invoke the
// original `fn` with the accumulated arguments, using `object` as the
// context.

function curry (fn, context, numArgs) {
  const args = []

  const _curry = function (newArg) {
    args.push(newArg)
    if (args.length >= numArgs) {
      return fn.apply(context, args)
    } else {
      return _curry
    }
  }
  return _curry
}

// function curry (fn, thisArg, numArgs) {
//   const args = []
//
//   const _curry = function (newArg) {
//     args.push(newArg)
//
//     if (args.length >= numArgs) {
//       return fn.apply(thisArg, args)
//     } else {
//       return _curry
//     }
//   }
//
//   return _curry
// }

const expectedResult = sumNums(1,2,3)
const curriedSumNums = curry(sumNums, {}, 3)
console.log(curriedSumNums(1) === curriedSumNums);
console.log(curriedSumNums(2) === curriedSumNums);
console.log(curriedSumNums(3) === expectedResult);

Function.prototype.curry = function (context, numArgs) {
  const args = []

  const _curry = (newArg) => {
    args.push(newArg)

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
const expectedResult2 = arr.concat([4,5, 6],[7, 8, 9], [10,11,12]);
const curriedConcat = arr.concat.curry(arr, 3)
console.log(curriedConcat([4,5,6]) === curriedConcat);
console.log(curriedConcat([7,8,9]) === curriedConcat);
console.log(curriedConcat([10,11,12]) === expectedResult2);
