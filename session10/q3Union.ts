type Admin = {
    role: 'admin';
    permissions: [];
    adminId: number
}

type Customer = {
    role: 'customer'
    purchaseHistory: []
    customerId: number
}

type Guest = {
    role: 'guest'
}

type User = Admin | Customer | Guest

function logUser(userSneha: User){
    if(userSneha.role==="admin"){
        console.log(userSneha.adminId);
        
    } else if(userSneha.role==="customer"){
        console.log(userSneha.customerId);
        
    } else{
        console.log("Guest user");
    }
}


logUser({
    role:'admin',
    permissions:[],
    adminId:14324424
})

interface AdminI{
    role: "admin";
    adminLevel: number
}

interface GuestI{
    role: "Guest";
    visitCount: number
}

type visitor = AdminI | GuestI

function handleVisitor(visitor: visitor){
    switch(visitor.role){
        case "admin":
            console.log(visitor.adminLevel);
            break;
        case "Guest":
            console.log(visitor.visitCount);
            break;
            
    }
}

handleVisitor({
    role:"Guest",
    visitCount:40
})