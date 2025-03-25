let a = parseFloat(prompt("Nhập số a: "));
let b = parseFloat(prompt("Nhập số b: "));
let c = parseFloat(prompt("Nhập số c: "));


if (a === 0) {
    alert("Không phải là pt bậc 2 (a phải khác 0): " + -c/b);
    
} else {
    delta = b*b - 4*a*c;
    
}

if (delta < 0) {
    alert("Phương trình vô nghiệm");
    
} else {
    
}

if (delta ===0) {
    alert("Phương trình có nghiệm kép: " + -b/(2*a));
    
} else {
    let x1 = (-b + Math.sqrt(delta))/(2*a);
    let x2 = (-b - Math.sqrt(delta))/(2*a);
    alert("Phương trình có 2 nghiệm phân biệt: x1 = " + x1 + " và x2 = " + x2);
    
}