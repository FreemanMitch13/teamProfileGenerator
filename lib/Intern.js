function Intern (name, id, email, school) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.school = school;
    this.getName = () => { 
        console.log(`The new employee is ${this.name}`)
    };
    this.getId = () => {
        console.log(`The new employee's Id is ${this.id}`)
    };
    this.getEmail = () => {
        console.log(`The new employee's Email is ${this.email}`)
    };
    this.getSchool = () => {
        console.log(`This Intern is a student at ${this.school}`)
    };
    this.getRole = () => {
        return 'Intern'
    };
}