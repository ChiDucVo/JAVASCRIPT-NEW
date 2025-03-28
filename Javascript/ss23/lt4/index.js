let n = parseInt(prompt(("Nhập số phần tử của mảng: ")))
let arr =[]
let arr1 = []
let count = 0;

for( let i = 0; i < n ; i++){
    let a = prompt(`Nhập phần tử thứ ${i + 1}:`)
    arr.push(a)
    
    if(!isNaN(a)){
        arr1[count] = a;
        count++
        
        
    }

}
alert(arr1)