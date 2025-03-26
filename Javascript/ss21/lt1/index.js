let sum = 0;

for ( let i = 1; i <= 5; i ++){
    let num = parseInt(prompt("Nhập số nguyên thứ " + i + " :" ));
    if (isNaN(num)) {
        alert("Không hợp lệ!");
        i--;
        continue;
    }
    if (num % 2 !== 0) {
        sum += num;
    }
}

alert("Tổng các số lẻ là: " + sum );