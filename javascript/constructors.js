// Parent class
class Animal {
  constructor(name) {
    this.name = name;
  }

  // Method
  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

// Child class (derived class)
class Dog extends Animal {
  constructor(name, breed) {
    // Call the superclass constructor
    super(name);
    this.breed = breed;
  }

  // Method overriding --method overides parent class method
  // method overloading-- method with differt args

  speak(sound) {
    if (sound) {
      console.log(`${this.name} ${sound}.`);
    } else {
      console.log(`${this.name} barks.`);
    }
  }

  // Additional method
  fetch() {
    console.log(`${this.name} fetches the ball.`);
  }
}

// Create instances of classes
let animal = new Animal("Generic");
let dog = new Dog("Buddy", "Golden Retriever");

// Call methods
animal.speak(); // Output: Generic makes a sound.
dog.speak(); // Output: Buddy barks.
dog.fetch(); // Output: Buddy fetches the ball.
