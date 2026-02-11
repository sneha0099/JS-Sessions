// Create an enum for payment states (INITIATED, SUCCESS, FAILED)
// Write a function that accepts only this enum
// Try passing an invalid value and observe the error
// Why enums are better than magic strings?

enum PaymentStatus {
  INITIATED = "INITIATEDD",
  SUCCESS = "SUCCESSS",
  FAILED = "FAILEDD"
}


function processPayment(status: PaymentStatus){
    if(status === PaymentStatus.SUCCESS){
        console.log("Payment was successful!");
        console.log(status);
        
    }else if(status === PaymentStatus.FAILED){
        console.log("Payment failed. Please try again.");
    }else if(status === PaymentStatus.INITIATED){
        console.log("Payment process initiated.");
    }else{
        console.error("Invalid payment state.");
    }
}

processPayment(PaymentStatus.SUCCESS)