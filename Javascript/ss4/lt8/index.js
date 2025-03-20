let month = Number.parseFloat(prompt("Nhập vào một số từ 1 đến 12:"));

if (month < 1 || month > 12 || Number.isNaN(month)) {
    alert("Vui lòng nhập vào một số từ 1 đến 12!");
    
} else {
    let season = (month >= 1 && month <= 3) ? "Mùa xuân"
        : (month >= 4 && month <= 6) ? "Mùa hè"
        : (month >= 7 && month <= 9) ? "Mùa thu"
        : "Mùa đông";
        alert(` Tháng ${month} là ${season}`);
    
}