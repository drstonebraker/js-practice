const { curry, Function } = require('./curry')

describe('function invocation', () => {
  function sumNums(...args) {
    return args.reduce((memo, num) => memo + num)
  }

  const myCurry = curry(sumNums, {}, 3)

  test('returns solution on third call', () => {
    expect(myCurry(2)).toBe(myCurry)
    expect(myCurry(1)).toBe(myCurry)
    expect(myCurry(3)).toEqual(6)
  })
})

describe('method invocation', () => {
  const arr = [1,2,3]
  const expectedResult = arr.concat([4,5, 6],[7, 8, 9], [10,11,12]);
  const curriedConcat = arr.concat.curry(arr, 3)

  test('return solution on third call', () => {
    expect(curriedConcat([4,5,6])).toEqual(curriedConcat)
    expect(curriedConcat([7,8,9])).toEqual(curriedConcat)
    expect(curriedConcat([10,11,12])).toEqual(expectedResult)
  })
})
