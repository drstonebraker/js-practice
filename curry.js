
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

module.exports = {
  curry, Function
};
