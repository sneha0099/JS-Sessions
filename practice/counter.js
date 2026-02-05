function makeCounter(initialValue = 0) {
    // Your implementation
    const val = initialValue

    let operator = val;

    return {
        increment() {
            operator++;
            return operator; 
    },

        decrement() {
            operator--;
            return operator;
    },

    reset() {
        operator = val;
        return operator;
    }
    }   
}

const counter = makeCounter(5);
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.reset());
console.log(counter.decrement());



module.exports = makeCounter;