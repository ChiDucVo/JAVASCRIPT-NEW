let n = prompt("Nhập số n:");

let isPerfectSquare = false;

if ( n < 0) {
    alert("Số chính phương phải lớn hơn 0, vui lòng nhập lại!");
    
} else {
    isPerfectSquare = Number.isInteger(Math.sqrt(n));
    alert("Số " + n + (isPerfectSquare ? " là" : " không phải") + " số chính phương");
}