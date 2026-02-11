function calculateTotal(price: number, discount?: number): number{
    if(discount){
    const val = price - (price*(discount/100));
    return val;
    }

    return price
}
const totalWithDiscount = calculateTotal(100, 10);
console.log(totalWithDiscount);

const totalWithOutDiscount = calculateTotal(100);
console.log(totalWithOutDiscount);

function logUserActivity(userId: string, activity: string, Timestamp?:string): void{
    const logTime = Timestamp || new Date().toISOString();
    console.log(`${logTime} User ${userId} performed activity: ${activity}`);
}

logUserActivity("user123", "login", "2026-01-01T12:00:00Z");
logUserActivity("user123", "logout"); 