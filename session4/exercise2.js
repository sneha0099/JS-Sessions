
function Animal(name) {
  this.name = name;
}

Animal.prototype.eat = function() {
  console.log(`${this.name} is eating.`);
};

function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

// Intent: Dog should inherit from Animal
Dog.prototype = Animal.prototype; 

Dog.prototype.bark = function() {
  console.log("Woof!");
};

const myDog = new Dog("Buddy", "Golden");
const genericAnimal = new Animal("Generic");

genericAnimal.bark(); // Why does this happen? --> woof!
console.log(myDog.constructor.name); // Why is this 'Animal' and not 'Dog'? --> Animal because we did Dog.prototype = Animal.prototype; 
// so this removed dog's props and added dof animals not both have shared context and constructer is animal.

/* 
This happens because Dog.prototype = Animal.prototype makes both constructors share the same prototype object instead of creating 
a new prototype chain. After that assignment, adding Dog.prototype.bark actually adds bark to Animal.prototype too, so even
genericAnimal can access bark() through its prototype and prints “Woof!”. Also, since the shared prototype object’s constructor 
property still points to Animal, myDog.constructor resolves to Animal, which is why myDog.constructor.name outputs "Animal" 
instead of "Dog".
*/




