type Role = "Admin" | "User" | "Guest";

type ID = number | string;

type BaseUser = {
  role: Role;
  name: string;
};

type AdminUsert = BaseUser & {
  role: "Admin";
  adminId: ID;
  permissions: string[];
};

type NormalUser = BaseUser & {
  role: "User";
  userId: ID;
};

type GuestUser = BaseUser & {
  role: "Guest";
};

type UserFinal = AdminUsert | NormalUser | GuestUser;

const admin: AdminUsert = {
  role: "Admin", 
  name: "Sneha",
  adminId: 1,
  permissions: []
};

function handleUser(user: UserFinal){
    switch(user.role){
        case "Admin":
            console.log(user.adminId);
            break;

        case "User":
        console.log(user.userId);
        break;

        case "Guest":
        console.log("Guest user");
        break;
    }
}

handleUser(
    {role: "User",
    name: "sneha",
    userId: 3434
}
)

type strOrNum = string | number;

let string:strOrNum = 23;
console.log(string);

let userId: strOrNum = 101;
let orderId: strOrNum = "ORD-2025";

// type ID = string | number;

// function findUser(id: ID) {}
