let a = parseFloat(prompt("Nhập hệ số a:"));
let b = parseFloat(prompt("Nhập hệ số b:"));
let c = parseFloat(prompt("Nhập hệ số c:"));

let delta = b * b - 4 * a * c;

let result = (delta < 0)
    ? "Phương trình vô nghiệm"
    : (delta === 0)
    ? "Phương trình có nghiệm kép x = " + (-b / (2 * a))
    : "Phương trình có hai nghiệm phân biệt:\n" +
        "x1 = " + ((-b + Math.sqrt(delta)) / (2 * a)) + "\n" +
        "x2 = " + ((-b - Math.sqrt(delta)) / (2 * a));

alert(result);
