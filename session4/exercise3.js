function SmartPhone(brand) {
  this.brand = brand;
  
  return {
    brand: "Generic",
    os: "Android"
  };
}

SmartPhone.prototype.getBrand = function() {
  return this.brand;
};

const myPhone = new SmartPhone("Apple");

console.log(myPhone.brand);    // Generic
console.log(myPhone.getBrand); // undefined.

/* This logs "Generic" and then undefined because when a function is called with new, JavaScript creates an instance object and 
sets its prototype to SmartPhone.prototype, but if the constructor explicitly returns another object, JavaScript uses that 
returned object as the final result and discards the originally created instance. In this code, the constructor returns { brand:
"Generic", os: "Android" }, so myPhone.brand becomes "Generic". However, getBrand was added to SmartPhone.prototype, and since 
the returned object literal is not linked to that prototype, myPhone.getBrand is undefined.

*/