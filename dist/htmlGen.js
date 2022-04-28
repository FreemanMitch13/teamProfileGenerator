let output = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer"/>
    <link rel="stylesheet" href="./style.css">
    <title>Team Profile</title>
</head>

<body>
    <div class="header">
        <h1> My Team</h1>
    </div>
    <div class="cardArea">
`

    function htmlGen({Manager, Engineer, Intern}) {

        if (Manager.length) {
            Manager.forEach(mgr => {
                output += `
                <div class="employeeCard">
                    <div class="cardHeader">
                        <h2 class="cardName">${mgr.name}</h2>
                    </div>
                    <h2 class="cardRole"><i class="fa-solid fa-people-roof"></i>  Manager</h2>
                    <h3>Id: ${mgr.id}</h3>
                    <h3>Email: ${mgr.email}</h3>
                    <h3>Office Number: ${mgr.officeNumber}</h3>
                </div>
        
                `
            });
        }
        if (Engineer.length) {
            Engineer.forEach(eng => {
                output += `
                <div class="employeeCard">
                    <div class="cardHeader">
                        <h2 class="cardName">${eng.name}</h2>
                    </div>
                    <h2 class="cardRole"><i class="fa-brands fa-wpbeginner"></i> Engineer</h2>
                    <h3>Id: ${eng.id}</h3>
                    <h3>Email: ${eng.email}</h3>
                    <h3>GitHub: ${eng.github}</h3>
                </div>
                `
            });
        }
        if (Intern.length) {
            Intern.forEach(int => {
                output += `
                <div class="employeeCard">
                    <div class="cardHeader">
                        <h2 class="cardName">${int.name}</h2>
                    </div>
                    <h2 class="cardRole"> <i class="fa-solid fa-person-walking-arrow-right"></i>  Intern</h2>
                    <h3>Id: ${int.id}</h3>
                    <h3>Email: ${int.email}</h3>
                    <h3>School: ${int.school}</h3>
                </div>
                `
            });

        }

        
    }
`
        <div class="employeeCard">
            <div class="cardHeader">
                <h2 class="cardName">test</h2>
            </div>
            <h2 class="cardRole"><i class="fa-solid fa-people-roof"></i>  Manager</h2>
            <h3>Id: 1</h3>
            <h3>Email: manager@example.com</h3>
            <h3>Office Number: 1</h3>
        </div>
        <div class="employeeCard">
            <div class="cardHeader">
                <h2 class="cardName">vacant</h2>
            </div>
                <h2 class="cardRole"><i class="fa-solid fa-person-walking-arrow-right"></i>  Intern</h2>
                <h3>Id: 1</h3>
                <h3>Email: intern@example.com</h3>
                <h3>School: Example University</h3>
        </div>
        <div class="employeeCard">
            <div class="cardHeader">
                <h2 class="cardName">test2</h2>
            </div>
                <h2 class="cardRole"><i class="fa-brands fa-wpbeginner"></i> Engineer</h2>
                <h3>Id: 1</h3>
                <h3>Email: engineer@example.com</h3>
                <h3>GitHub: example.github</h3>
        </div>
        <div class="employeeCard">
            <div class="cardHeader">
                <h2 class="cardName">test3</h2>
            </div>
                <h2 class="cardRole"><i class="fa-brands fa-wpbeginner"></i>  Engineer</h2>
                <h3>Id: 1</h3>
                <h3>Email: engineer@example.com</h3>
                <h3>GitHub: example.github</h3>
        </div>
        <div class="employeeCard">
            <div class="cardHeader">
                <h2 class="cardName">vacant2</h2>
            </div>
                <h2 class="cardRole"> <i class="fa-solid fa-person-walking-arrow-right"></i>  Intern</h2>
                <h3>Id: 1</h3>
                <h3>Email: intern@example.com</h3>
                <h3>School: Example University</h3>
        </div>
    </div>
</body>

</html>
`