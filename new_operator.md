What does the `new` operator do in javascript?

used with a constructor function
Creates a new object `{}`
calls the constructor function with the new object as the context
sets up object to delegate to constructor's prototype
sets objects constructor property to the constructor function

const myObj = new NewObj()

equivalent to?
const myObj = Object.create(NewObj.prototype)
myObj.constructor = NewObj
NewObj.call(myObj)
