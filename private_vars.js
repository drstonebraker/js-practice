// write a function that creates a bank account which holds private instance variables
// such as account balance and return object with public methods for granting
// authorized access to private vars


const createAccount = (initialBal, newPassword) => {
  let balance = initialBal
  const passwordDigest = new PasswordDigest(newPassword)

  return {
    getBalance: function (password) {
      if (passwordDigest.checkPassword(password)) {
        return balance
      } else {
        throw new Error('Invalid password')
      }
    }
  }
}

// write a method that creates an object with a value that can only be accessed a
// limited number of times

const LimitedUseObject = function (value, limit) {
  let remainingUses = limit

  this.use = function () {
    if (remainingUses > 0) {
      remainingUses--
      return value
    } else {
      return null
    }
  }
}

const myObj = new LimitedUseObject('abc', 3);

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

  return function (word) {
    chant.push(word)
    console.log(chant.join(' '));
  }
}

const myChant = createChant()

myChant('hey')
myChant('hey')
myChant('ho')
myChant('ho')
