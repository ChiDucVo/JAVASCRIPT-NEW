let username = prompt("Nhập tên đăng nhập:");

if (username == "ADMIN") {
    let password = prompt("Nhập mật khẩu:");

    if (password == "MASTER") {
        alert("Welcome");
    } else if (password === "" || password === null) {
        alert("Cancelled");
    } else {
        alert("Wrong password");
    }

} else if (username === "" || username === null) {
    alert("Cancelled");
} else {
    alert("I don't know you");
}
