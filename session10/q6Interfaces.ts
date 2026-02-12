interface Base{
    name: string,
    age: number
}

interface AdminInter extends Base{
    role: "Admin"
    AdminId: number
}

interface CustomerInter extends Base{
    role: "Customer"
    CustomerId: number
}

function logBase(base: Base){
    console.log(base);
    
}

logBase({name:"sneha",age:21})

const adminis: AdminInter = {
    name: "s",
    role: "Admin",
    AdminId: 42324,
    age: 21,
}

logBase(adminis)

interface ApiResponse<T> {
    status: "success" | "error";
    message: string;
    data: T
}

function handleResponse<T>(response: ApiResponse<T>): void{
    if(response.status==="success"){
        console.log("success", response.message);
        console.log("Data:", response.data);
    }else{
        console.error("Error:", response.message);
    }
}

interface ProductI{
  id: number;
  name: string;
  price: number;
  description: string;
}

interface ProductApiResp extends ApiResponse<ProductI[]>{
    totalProducts: number
}

const prodResp: ProductApiResp = {
    status: "success",
    message: "hi, sneha this side",
    data: [
        {
            id:1,
            name:"asus vivo book",
            price: 70000,
            description: "hi hi"
        },
        {
            id:2,
            name:"asus vivo book",
            price: 70000,
            description: "hi hi"
        }
    ],
    totalProducts: 2

}

handleResponse(prodResp)

//Why are interfaces preferred in large projects?

// Interfaces are preferred because they are extendable, scalable, readable, and designed for object contracts.
