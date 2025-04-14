let btnAdd = document.querySelector(".btn-add");

let students = [];

btnAdd.addEventListener("click", (event) => {
    event.preventDefault();

    let inputName = document.getElementById("name").value.trim();
    let inputMssv = document.getElementById("id").value.trim();
    let inputEmail = document.getElementById("email").value.trim();
    let inputClass = document.getElementById("class").value.trim();

    let errorName = document.getElementById("name-error");
    let errorMssv = document.getElementById("id-error");
    let errorEmail = document.getElementById("email-error");
    let errorClass = document.getElementById("class-error");

    errorName.style.display = "none";
    errorMssv.style.display = "none";
    errorEmail.style.display = "none";
    errorClass.style.display = "none";

    let isValid = true;

    if (inputName === "") {
        errorName.style.display = "block";
        isValid = false;
    }

    if (inputMssv === "") {
        errorMssv.style.display = "block";
        isValid = false;
    }

    if (!inputEmail.includes("@") || !inputEmail.includes(".")) {
        errorEmail.style.display = "block";
        isValid = false;
    }

    if (inputClass === "") {
        errorClass.style.display = "block";
        isValid = false;
    }

    if (isValid) {
        students.push({ name: inputName, mssv: inputMssv, email: inputEmail, class: inputClass });
        renderStudent();

        document.getElementById("name").value = "";
        document.getElementById("id").value = "";
        document.getElementById("email").value = "";
        document.getElementById("class").value = "";
    }
});

function renderStudent() {
    let studentTable = document.getElementById("student-table");
    studentTable.innerHTML = "";

    students.forEach((student) => {
        let row = document.createElement("tr");

        let tdName = document.createElement("td");
        tdName.textContent = student.name;

        let tdMssv = document.createElement("td");
        tdMssv.textContent = student.mssv;

        let tdEmail = document.createElement("td");
        tdEmail.textContent = student.email;

        let tdClass = document.createElement("td");
        tdClass.textContent = student.class;

        let tdActions = document.createElement("td");

        let btnEdit = document.createElement("button");
        btnEdit.className = "btn-edit";
        btnEdit.textContent = "Sửa";

        let btnDelete = document.createElement("button");
        btnDelete.className = "btn-delete";
        btnDelete.textContent = "Xoá";
        btnDelete.addEventListener("click", () => {
            deleteStudent(student.mssv);
        });

        tdActions.appendChild(btnEdit);
        tdActions.appendChild(btnDelete);

        row.appendChild(tdName);
        row.appendChild(tdMssv);
        row.appendChild(tdEmail);
        row.appendChild(tdClass);
        row.appendChild(tdActions);

        studentTable.appendChild(row);
    });
}
