let R = parseFloat(prompt("Nhập bán kính hình cầu: "));

if (isNaN(R) || R <= 0) {
    alert("Vui lòng nhập số hợp lệ");
    
} else {
    let pi = Math.PI;
    let S = 4 * pi * R * R;
    let V = 4/3 * pi * R * R * R;
    let C = 2 * pi * R
    alert(`Diện tích bề mặt hình cầu: ${S}\nThể tích hình cầu: ${V}\nChu vi hình cầu: ${C}`);
}
