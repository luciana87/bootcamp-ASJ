const tableBody = document.getElementById("table-content");
const createId = document.getElementById("input-create-id");
const createName = document.getElementById("input-create-name");
const createSurname = document.getElementById("input-create-surname");
const createGrade = document.getElementById("input-create-grade");
const create = document.getElementById("button-create");
const updateId = document.getElementById("input-update-id");
const updateName = document.getElementById("input-update-name");
const updateSurname = document.getElementById("input-update-surname");
const updateGrade = document.getElementById("input-update-grade");
const update = document.getElementById("button-update");



function loadPage() {
    tableBody.innerHTML = '';
    fetch('http://localhost:8080/alumnos')
    .then((response) => response.json())
    .then((json) => {
        console.log(json);
        for (let alumno of json) {
            let row = document.createElement('tr');
            row.innerHTML = 
                `
                <td>${alumno.id}</td>
                <td>${alumno.name}</td>
                <td>${alumno.surname}</td>
                <td>${alumno.grade}</td>
                <td> <button class="btn btn-danger" id="delete-${alumno.id}">X</button> </td>
                `
            tableBody.append(row);
            const deleteBtn = document.getElementById(`delete-${alumno.id}`);
            deleteBtn.addEventListener('click', () => {
                fetch(`http://localhost:8080/alumnos/${alumno.id}`, {
                    method: 'DELETE'
                })
                    .then(() => {
                        loadPage();
                    })
            })

        }
    });
}
loadPage();

create.addEventListener('click', (event) => {
    event.preventDefault();
    let alumno = {id: -1, name: createName.value, surname: createSurname.value, grade: Number(createGrade.value)};
    console.log(alumno);
    fetch(`http://localhost:8080/alumnos`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(alumno)
    })
    .then((respose) => loadPage())
});

update.addEventListener('click', (event) => {
    event.preventDefault();
    let alumno = {id: updateId.value, name: updateName.value, surname: updateSurname.value, grade: Number(updateGrade.value)};
    console.log(alumno);
    fetch(`http://localhost:8080/alumnos/${updateId.value}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(alumno)
    })
    .then(() => loadPage())
});


