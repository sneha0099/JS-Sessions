enum Role {
    Admin,
    User,
    Guest
}

enum Permission {
    Read,
    Write,
    Delete
}

const accessControl = {
    [Role.Admin] : [Permission.Read, Permission.Write, Permission.Delete],
    [Role.User]: [Permission.Read, Permission.Write],
    [Role.Guest] : [Permission.Read]
}

function CanAccess(role: Role,Permission:Permission){
    if(accessControl[role].includes(Permission)){
        console.log(`can access`);
        
    }else{
        console.log(`cant access`);
        
    }
}

CanAccess(Role.Admin,Permission.Delete)

type User1 = {
    name: string,
    age: number 
}

let user: User1 = {
    name: "sneha",
    age: 20
}

console.log(user);
