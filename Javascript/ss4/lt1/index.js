let n = parseFloat(prompt("Nhập số tháng bạn muốn kiểm tra: "));

if (isNaN(n) || n <= 0 || n > 12) {
    alert("Vui lòng nhập một tháng hợp lệ!");
} else {
    switch (n) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            alert("Tháng " + n + " có 31 ngày.");
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            alert("Tháng " + n + " có 30 ngày.");
            break;
        case 2:
            alert("Tháng " + n + " có 28 hoặc 29 ngày.");
            break;
    }
}