let r = parseFloat(prompt("Nhập bán kính hình tròn: "));
let h = parseFloat(prompt("Nhập chiều cao hình trụ: "));

if (isNaN(r) || isNaN(h) || r <= 0 || h <= 0) {
    alert("Vui lòng nhập số hợp lệ");
} else {
    let pi = Math.PI;
    let Sxq = 2 * pi * r * h;
    let Stp = Sxq + 2 * pi * r * r;
    let V = pi * r * r * h;
    let chuViDay = 2 * pi * r;
    alert(`Diện tích xung quanh hình trụ: ${Sxq}\nDiện tích toàn phần hình trụ: ${Stp}\nThể tích hình trụ: ${V}\nChu vi đáy hình trụ: ${chuViDay}`);
    
}