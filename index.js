class Cat {
    constructor(name, sex) {
      this.name = name;
      this.sex = sex;
    }
  
    speak() {
      return `${this.name} says meow!`;
    }
  }
  
  class Dog {
    constructor(name, sex) {
      this.name = name;
      this.sex = sex;
    }
  
    speak() {
      return `${this.name} says woof!`;
    }
  }
  
  class Bird {
    constructor(name, sex) {
      this.name = name;
      this.sex = sex;
    }
  
    speak() {
      if (this.sex === 'male') {
        return `It's me! ${this.name}, the parrot!`;
      } else {
        return `${this.name} says squawk!`;
      }
    }
  }
  const fluffy = new Cat('Fluffy', 'female');
  console.log(fluffy.speak()); // Output: Fluffy says meow!
  
  const max = new Dog('Max', 'male');
  console.log(max.speak()); // Output: Max says woof!
  
  const polly = new Bird('Polly', 'male');
  console.log(polly.speak()); // Output: It's me! Polly, the parrot!
  
  const tweety = new Bird('Tweety', 'female');
  console.log(tweety.speak()); // Output: Tweety says squawk!
    