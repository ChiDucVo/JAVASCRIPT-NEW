let input = prompt("Nhập số nguyên dương N: ");
let N = parseInt(input);

if (isNaN(N) || N <= 0) {
    alert("Dữ liệu nhập vào không hợp lệ!");
} else {
    let result = "";
    for (let i = 1; i <= N; i++) {
        if (i % 5 === 0) {
            result += i + ", ";
        }
    }
    alert("Các số chia hết cho 5 từ 1 đến " + N + " là: " + result);
}

