const renderEmployee = employee => {
    const role = employee.getRole();
    if (role == 'Manager')
        return `Office: ${employee.getOfficeNumber()}`;
    if (role == 'Engineer')
        return `GitHub Username: <a href='https://github.com/${employee.getGithub()}' target='_blank'>${employee.getGithub()}</a>`;
    if (role == 'Intern')
        return `School: ${employee.getSchool()}`;
};

const card = employee =>
    `	
			<div class="col-sm-3">
				<div class="card text-white bg-info mb-3" style="max-width: 18rem;">
					<div class="card-header">${employee.getName()}</div>
					<div class="card-body">
						<h5 class="card-title">${employee.getRole()}</h5>
						<p class="card-text">Email: <a href='mailto:${employee.getEmail()}'
								target='_blank'>${employee.getEmail()}</a></p>
						<p class="card-text">ID: ${employee.getId()}</p>
						<p class="card-text">${renderEmployee(employee)}</p>
					</div>
				</div>
			</div>
`;

const renderCard = employees => {
    let result = ``;
    for (let i = 0; i < employees.length; i++) {
        result = result.concat(card(employees[i]));
    }
    return result;
}

const HTML = employees =>
    ` 
    <!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Team Builder</title>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
		integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>

<body>
	<header>
		<h1>Team Builder</h1>
	</header>
	<main>
		<div class="row justify-content-around">
			${renderCard(employees)}
		</div>
	</main>
	<footer>
	</footer>
</body>

</html>
  `;

module.exports = employees => {
    return HTML(employees);
}