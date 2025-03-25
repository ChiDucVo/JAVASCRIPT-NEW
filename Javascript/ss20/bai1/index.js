let input = prompt("Nhập số nguyên dương N: ")
let N = parseInt(input);

if (isNaN(N) || N <= 0 ) {
    alert ("Nhập dữ liệu không hợp lệ"); 
    
} else {
    let sum = 0;
    for( let i = 1; i <= N; i++ ){
        sum += i
    }
    alert("Tổng các số nguyên từ 1 đến " + N + " là: " + sum);
    
}