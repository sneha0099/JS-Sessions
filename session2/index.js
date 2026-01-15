//program for number check whether it is positive or negative or zero

let number = 2

if (number > 0) {
    console.log(`The number is ${number} and it is positive`);
} else if (number < 0) {
    console.log(`The number is ${number} and it is negative`);
} else {
    console.log("The number is zero");
}

//Even , odd in range

for(let i=0; i<=20; i++){
    if(i&1){
        console.log(`${i} is odd`);
        
    }else{
        console.log(`${i} is even`)
    }
}

//Role Acess using switch case

let role = "admin";

switch (role) {
    case "admin":
        console.log("Admin -> Full access");
        break;
    case "user":
        console.log("User -> Limited access");
        break;
    case "manager":
        console.log("Manager -> Moderate access");
        break;
    default:
        console.log("invalid role");
}

//Total price Functionc

function caluculatePrice(price, quantity) {
    let total = price * quantity;
    return total;
}

console.log(caluculatePrice(150, 4));


//Coupan Discount Function

function applyCoupan(amount, coupanCode){
    switch(coupanCode){
        case "SAVE10":
            return amount - (amount * 0.10);
        case "SAVE20":
            return amount - (amount * 0.20);
        default:
            return amount;
    }
}

console.log(applyCoupan(1000, "SAVE10"));