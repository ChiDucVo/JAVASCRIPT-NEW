let arr = [];

if (arr.length === 0) {
    alert("Không có số lớn nhất")
}

let max = arr[0]
let Index = 0
for (const index in arr) {
    if(arr[index] > max){
        max = arr[index]
        Index = index
    }
    
}
alert(`Số lớn nhất: ${max} 
Vị trí: ${Index}`);
