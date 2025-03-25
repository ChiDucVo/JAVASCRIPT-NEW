let n = Number(prompt("Nhập số nguyên tố : "));
let check = true;

if (n < 2) {
    check = false;
    alert("Không phải là số nguyên tố!")

} else {
    for(i = 2; i < n-1; i ++)
    {
        if( n % i == 0){
            check = false;
            alert("Không phải là số nguyên tố!")
            break;

        }
    }
    
} if ( check == true) {
    alert("Đây là số nguyên tố !")
    
}