let number = Number.parseFloat(prompt("Nhập một số có thể chia hết cho 3 và 5:"));

if (Number.isNaN(number) || number % 3 !== 0 || number % 5 !== 0) {
    alert("Vui lòng đọc lại đề! ");
} else {
    alert(number + " là số chia hết cho cả 3 và 5.");
}