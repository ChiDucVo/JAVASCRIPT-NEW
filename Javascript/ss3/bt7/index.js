let a = parseInt (prompt("Nhập số a: "));
let b = parseInt (prompt("Nhập số b: "));
let c = prompt("Nhập vào các phép tính (+;-;*;/): ");

if (c === "+") {
    alert("Tổng của a và b là: " + (a + b));
} else if (c === "-") {
    alert("Hiệu của a và b là: " + (a - b));
} else if (c === "*") {
    alert("Tích của a và b là: " + (a * b));
} else if (c === "/") {
    if (b === 0) {
        alert("Không thể chia cho 0");
    } else {
        alert("Thương của a và b là: " + (a / b));
    }
} else {
    alert("Nhập không hợp lệ");
}

