function logUser(userSneha) {
    if (userSneha.role === "admin") {
        console.log(userSneha.adminId);
    }
    else if (userSneha.role === "customer") {
        console.log(userSneha.customerId);
    }
    else {
        console.log("Guest user");
    }
}
logUser({
    role: 'admin',
    permissions: [],
    adminId: 14324424
});
function handleVisitor(visitor) {
    switch (visitor.role) {
        case "admin":
            console.log(visitor.adminLevel);
            break;
        case "Guest":
            console.log(visitor.visitCount);
            break;
    }
}
handleVisitor({
    role: "Guest",
    visitCount: 40
});
