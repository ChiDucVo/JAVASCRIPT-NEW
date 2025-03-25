let a = parseFloat(prompt("Nhập hệ số a:"));
let b = parseFloat(prompt("Nhập hệ số b:"));
let c = parseFloat(prompt("Nhập hệ số c:"));

let max = (a >= b && a >= c) ? a 
    : (b >= a && b >= c) ? b 
    : c;
alert("Số lớn nhất là: " + max);