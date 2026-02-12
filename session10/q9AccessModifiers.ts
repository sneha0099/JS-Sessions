// Assignment 9: Access Modifiers
// Create a service class exposing only required public methods
// Keep internal data private
// Explain which members should be accessible and why
// Create a class with public, private, and protected members
// Try accessing them outside the class
// Which members should be exposed and why?

class service{
    private users:{id: number, name:string}[] = []

    private generateId(): number{
        return this.users.length + 1;
    }

    public createUser(name: string){
        const newUser = {
            id: this.generateId(),
            name
        };
        this.users.push(newUser);
        return newUser
    }

    public getUser(id: number){
        return this.users.find((u) => u.id === id)
    }

}

const servicee = new service();

console.log(servicee.createUser("Sneha"))
console.log(servicee.getUser(1))

class Employee{
    public name: string;
    private salary: number;
    protected department: string;
    
    constructor(name: string, salary: number, department: string){
        this.name = name,
        this.salary = salary,
        this.department = department
    }

    public getSalary(){
        return this.salary
    }

}

let newEmp1 = new Employee("john", 100000,"Engineering")
console.log(newEmp1.name);
console.log(newEmp1.getSalary());
//console.log(newEmp1.salary);

