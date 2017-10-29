// write a function that creates a bank account which holds private instance variables
// such as account balance and return object with public methods for granting
// authorized access to private vars

const bankAccount = function bankAccount(initialBal, newPassword) {
  let balance = initialBal
  const passwordDigest = createPasswordDigest(newPassword)

  return {
    getBalance: function(password) {
      if (isValidPassword(passwordDigest, password)) {
        return balance
      } else {
        throw Error('Incorrect password')
      }
    }
  }
}


// write a method that creates an object with a value that can only be accessed a
// limited number of times

const LimitedUseObject = function LimitUseObject(value) {
  let remainingUses = 3

  this.use = function () {
    remainingUses--
    return remainingUses >= 0 ? value : null
  }
}

const myObj = new LimitedUseObject('abc');

console.log(myObj.use())
console.log(myObj.use())
console.log(myObj.use())
console.log(myObj.use())
console.log(myObj.use())
console.log(myObj.use())

// write a function that uses a closure to add a new word to a chant on every call
// of a function

const createChant = function createChant() {

  const chant = []

  return function printChant(word) {
    chant.push(word)
    console.log(chant.join(' '))
  }
}

const myChant = createChant()

myChant('hey')
myChant('hey')
myChant('ho')
myChant('ho')
