let n = prompt("Nhập ký tự cần kiểm tra: ");

let capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lower = "abcdefghijklmnopqrstuvwxyz";
let number = "0123456789";
let special = capital + lower || captial + number || lower + number || lower + capital || capital + lower + number || capital + number + lower || number + lower + capital || number + capital + lower;




if (capital.includes(n)) {
    alert(n + " là chữ cái viết hoa.");
}
else if (lower.includes(n)) {
    alert(n + " là chữ cái viết thường.");
}
else if (number.includes(n)) {
    alert(n + " là số.");
}
else if (special.includes(n)) {
    alert(n + " là ký tự đặc biệt.");
}
else {
    alert(n + " không phải là ký tự hợp lệ.");
}