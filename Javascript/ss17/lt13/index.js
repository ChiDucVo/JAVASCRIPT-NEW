let a = parseFloat(prompt("Nhập số tiền gửi (VND):"));
let month = parseInt(prompt("Nhập số tháng gửi:"));

const interestRate = 4.3; 

if (isNaN(a) || isNaN(month) || a <= 0 || month <= 0) {
    alert("Vui lòng nhập số hợp lệ!");
} else {
    let monthlyRate = interestRate / 100 / 12;
    let profit = a * monthlyRate * month;
    let total = a + profit; //số tiền lãi nhận đc

    alert(`Số tiền sau ${month} tháng: ${total.toLocaleString()} VND\nTiền lãi nhận được: ${profit.toLocaleString()} VND`);
}
