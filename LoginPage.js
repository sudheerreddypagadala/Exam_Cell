function validateLogin(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const roleElement = document.querySelector('input[name="role"]:checked'); 

    if (!roleElement) {
        alert("Please select a role.");
        return;  
    }

    const role = roleElement.value;

    const validCredentials = {
        student: {
            username: "user",
            password: "pass123"
        },
        faculty: {
            username: "faculty",
            password: "pass123"
        },
        admin: {
            username: "admin",
            password: "pass123"
        }
    };

    if (username === validCredentials[role].username && password === validCredentials[role].password) {
        if (role === "student") {
            alert("Welcome Student!");
            window.location.assign("Student_Dashboard.html");
        } else if (role === "faculty") {
            alert("Welcome Faculty!");
            window.location.assign("Faculty_Dashboard.html");
        } else if (role === "admin") {
            alert("Welcome Admin!");
            window.location.assign("Admin_Dashboard.html");
        }
    } else {
        alert("Invalid username or password. Please try again.");
    }
}