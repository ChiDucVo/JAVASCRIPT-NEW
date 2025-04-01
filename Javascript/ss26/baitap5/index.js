


function findMax(numbers) {
    return numbers.reduce((maxInfo, num, index) => {
        return num > maxInfo.value ? { value: num, index: index } : maxInfo;
    }, { value: -Infinity, index: -1 });
}

let numbers = [5, 12, 9, 30, 17, 22];
let result = findMax(numbers);

console.log("Số lớn nhất:", result.value);
console.log("Vị trí:", result.index);
