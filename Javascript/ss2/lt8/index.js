let Day1 = prompt("Nhập ngày 1 (YYYY-MM-DD): ");
let Day2 = prompt("Nhập ngày 2 (YYYY-MM-DD): ");

// kiểm tra ngày nhập vào có đúng định dạng YYYY/MM/DD không
let datePattern = /^\d{4}-\d{2}-\d{2}$/;

if (!datePattern.test(Day1) || !datePattern.test(Day2)) {
    alert("Ngày nhập vào không hợp lệ! Vui lòng nhập đúng định dạng YYYY-MM-DD.");
} else {
    let d1 = new Date(Day1);
    let d2 = new Date(Day2);

    // Kiểm tra nếu ngày hợp lệ
    if (isNaN(d1.getTime()) || isNaN(d2.getTime())) {
        alert("Ngày nhập vào không hợp lệ! Vui lòng nhập đúng định dạng hợp lệ.");
    } else {
        let dayDiff = Math.abs(d2 - d1) / (1000 * 60 * 60 * 24);
        alert("Khoảng cách giữa 2 ngày là: " + dayDiff + " ngày");
    }
}