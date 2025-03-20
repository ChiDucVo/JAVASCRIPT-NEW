let choice = Number(prompt("Nhập loại tiền tệ bạn muốn chuyển đổi: \n1. USD -> VND \n2. VND -> USD"));
let rate = 23000;

if (choice === 1 || choice === 2) {
    let amount = parseFloat(prompt("Nhập số tiền cần chuyển đổi:"));
    
    if (isNaN(amount) || amount <= 0) {
        alert("Vui lòng nhập một số tiền hợp lệ!");
    } else {
        if (choice === 1) {
            alert(`${amount} USD = ${amount * rate} VND`);
        } else {
            alert(`${amount} VND = ${(amount / rate).toFixed(2)} USD`);
        }
    }
} else {
    alert("Lựa chọn không hợp lệ!");
}
