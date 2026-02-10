// Problem 7: Role-Based Permission Checker
// Objective
// Implement a generic role-based access control utility.
// Input
// const roles = {
//   admin: ["READ", "WRITE", "DELETE"],
//   editor: ["READ", "WRITE"],
//   viewer: ["READ"]
// };

// Requirements
// Implement:


// canAccess(role, permission)

// Return true or false


// Handle invalid roles safely


// Avoid hard-coded conditions


// Expected Outcome
// canAccess("admin", "DELETE"); // true
// canAccess("viewer", "WRITE"); // false
// canAccess("unknown", "READ"); // false

const roles = {
  admin: ["READ", "WRITE", "DELETE"],
  editor: ["READ", "WRITE"],
  viewer: ["READ"]
};

const rolesd = roles["admin"]
//console.log(rolesd);



// const canAccess = (Role,Permission) => {
//     let ans = false;
//     if(roles[Role]){
//         const access = roles[Role]
//         for (const p of access) {
//             if(p==Permission){
//                 ans = true
//             }
//         }
//     }
//     return ans;
// }

const canAccess = (Role, Permission) => {
    return roles[Role].includes(Permission) || false;
}

const can = canAccess("viewer","READ")
console.log(can);
