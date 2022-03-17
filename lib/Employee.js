function Employee(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.getName = () => { 
        console.log(`The new employee is ${this.name}`)
    };
    this.getId = () => {
        console.log(`The new employee's Id is ${this.id}`)
    };
    this.getEmail = () => {
        console.log(`The new employee's Email is ${this.email}`)
    };
    this.getRole = () => {
        return 'Employee'
    };
}