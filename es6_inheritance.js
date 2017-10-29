class Animal {
  constructor(name) {
    this.name = name
  }

  speak(sound) {
    console.log(`${this.name} ${sound}s`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name)
  }

  bark() {
    this.speak('bark')
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name)
  }

  meow() {
    this.speak('meow')
  }
}

const spot = new Dog('Spot')
const whiskers = new Cat('Whiskers')

spot.bark()
whiskers.meow()
try {
  whiskers.bark()
} catch (err) {
  console.error(err)
  spot.bark.call(whiskers)
}
