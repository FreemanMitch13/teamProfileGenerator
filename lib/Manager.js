function Manager(name, id, email, officeNumber) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.officeNumber = officeNumber;
    this.getName = () => { 
        console.log(`The new employee is ${this.name}`)
    };
    this.getId = () => {
        console.log(`The new employee's Id is ${this.id}`)
    };
    this.getEmail = () => {
        console.log(`The new employee's Email is ${this.email}`)
    };
    this.getOfficeNumber = () => {
        console.log(`This Manager's Office Number is ${this.officeNumber}`)
    };
    this.getRole = () => {
        return 'Manager'
    };
}