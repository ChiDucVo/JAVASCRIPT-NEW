let evencount = 0;
let oddcount= 0;


for ( let i = 1; i <= 5; i ++){
    let n = parseInt(prompt("Nhập số nguyên thứ " + i + " :" ));
    if (isNaN(n)) {
        alert("Không hợp lệ!");
        i--;
        continue;
    }

    if (n % 2 === 0) {
        evencount ++;
    } else {
        oddcount ++;
        
    }
}
alert("Tổng số chẵn là: " + evencount + "\n Tổng số lẻ là : " + oddcount );