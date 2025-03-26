let n = Number(prompt("Nhập vào số nguyên: "))

if(isNaN(n)){
    alert("Vui lòng nhập lại !")
} else {
    for( i = 1; i <= n; i++ ){
        if (n % i === 0) {
           console.log(i)
        }
    }
}

