Function.prototype.inherits = function (Parent) {
  this.prototype = Object.create(Parent.prototype)
  this.prototype.constructor = this
}

function Animal (name) {
  this.name = name
}

Animal.prototype.speak = function speak (sound) {
  console.log(`${this.name} ${sound}s`);
}

function Dog (name) {
  Animal.call(this, name)
}

Dog.inherits(Animal)

Dog.prototype.bark = function bark () {
  this.speak('bark')
}

function Cat (name) {
  Animal.call(this, name)
}

Cat.inherits(Animal)

Cat.prototype.meow = function () {
  this.speak('meow')
}

const spot = new Dog('Spot')
const whiskers = new Cat('Whiskers')

spot.bark()
whiskers.meow()
try {
  whiskers.bark()
} catch (err) {
  console.error(err)
  const whiskersBarks = spot.bark.bind(whiskers)
  whiskersBarks()
}










// Function.prototype.inherits = function(Parent) {
//   this.prototype = Object.create(Parent.prototype)
//   this.prototype.constructor = this
// }
//
// function Animal(name) {
//   this.name = name
// }
//
// Animal.prototype.speak = function speak(sound) {
//   console.log(`${this.name} ${sound}s`);
// }
//
// function Dog(name) {
//   Animal.call(this, name)
// }
//
// Dog.inherits(Animal)
//
// Dog.prototype.bark = function bark() {
//   this.speak('bark')
// }
//
// function Cat(name) {
//   Animal.call(this, name)
// }
//
// Cat.inherits(Animal)
//
// Cat.prototype.meow = function meow() {
//   this.speak('meow')
// }
//
// const spot = new Dog('Spot')
// const whiskers = new Cat('Whiskers')
//
// spot.bark()
// whiskers.meow()
// try {
//   whiskers.bark()
// } catch (err) {
//   console.error(err)
//   spot.bark.call(whiskers)
// }
