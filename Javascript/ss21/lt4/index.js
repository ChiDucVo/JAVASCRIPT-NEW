let a = parseFloat(prompt("Nhập hệ số a: "));
let b = parseFloat(prompt("Nhập hệ số b: "));
let c = parseFloat(prompt("Nhập hệ số c: "));
let delta = b*b - 4 * a * c;

if (delta < 0) {
    alert("Phương trình vô nghiệm !")
    
} else if (delta === 0) {
    let x = -b/2*a;
    alert("Phương trình có nghiệm kép x1=x2= : " + x);
    
} else if(delta > 0) {
    let x1 = (-b + Math.sqrt(delta))/2*a;
    let x2 = (-b - Math.sqrt(delta))/2*a;
    alert("Phương trình có 2 nghiệm: " + "\n X1 = " + x1 + "\n X2 = " + x2);
} {
    
}
