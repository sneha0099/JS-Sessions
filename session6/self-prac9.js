// Create a function calculateTotal(tax, shipping) that logs: this.basePrice + tax + shipping.

// Create an object item1 with { basePrice: 100 }.

// Create an object item2 with { basePrice: 200 }.

// Execution:

// Use call to calculate item1 total with 10 tax and 5 shipping.

// Use apply to calculate item2 total using an array [20, 10].

// Use bind to create a fixed function for item1 and run it.

function calulateTotal(tax, shipping){
    console.log(this.baseprice + tax + shipping);
}

item1 = {
    baseprice: 100
}

item2 = {
    baseprice: 100
}

calulateTotal.call(item1,10,5);

const charges = [20,10];

calulateTotal.apply(item2, charges)

const newitem1binded = calulateTotal.bind(item1);
console.log(newitem1binded);
newitem1binded(10,5);


