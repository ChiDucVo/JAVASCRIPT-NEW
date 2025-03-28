let n = parseInt(prompt("Nhập số phần tử của mảng: "))
let arr =[]

if (n < 0 ) {
    alert("Số không hợp lệ")
    
} else if(n === 0 || isNaN(n)){
    alert("Mảng không có phần tử")
} else {
    for( let i = 0; i < n ; i++){
        let num = parseFloat(prompt(`Nhập phần tử thứ ${i + 1}:`))
        arr.push(num)
    }
    let count = 0
    for (const value of arr) {
        if (value < 0) {
            count++
        }
    }
    alert("số nguyên âm trong mảng: "+ count)
}

