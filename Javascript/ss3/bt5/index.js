let years = parseInt(prompt("Nhập năm:"));

switch (true) {
    case (years < 1):
        alert("Mới vào nghề");
        break;
    case (years >= 1 && years < 3):
        alert("Nhân viên có kinh nghiệm");
        break;
    case (years >= 4 && years < 6):
        alert("Chuyên viên");
        break;
    case (years > 6 && years < 30):
        alert("Quản lý");
        break;
    // case (years === null || years === ""):
    //     alert("Cancelled");
    //     break;    
    default:
        alert("Không hợp lệ");
        break;
}
