let n = parseInt(prompt("Nhập số n:"));

if (isNaN(n)) {
    alert("Vui lòng nhập số hợp lệ");
    
} else {
    let binary = n.toString(2);
    alert("Số " + n + " chuyển sang hệ nhị phân là: " + binary);
    
}