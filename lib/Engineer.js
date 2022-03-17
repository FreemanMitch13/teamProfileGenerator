function Engineer (name, id, email, github) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.github = github;
    this.getName = () => { 
        console.log(`The new employee is ${this.name}`)
    };
    this.getId = () => {
        console.log(`The new employee's Id is ${this.id}`)
    };
    this.getEmail = () => {
        console.log(`The new employee's Email is ${this.email}`)
    };
    this.getGithub = () => {
        console.log(`This Engineer's Github is ${this.github}`)
    };
    this.getRole = () => {
        return 'Engineer'
    };
}