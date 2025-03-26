let password = "123";

while(true){
    let n = prompt("Vui lòng nhập mật khẩu: ");
    if (n === password) {
        alert("Đăng nhập thành công!")
        break;
        
    } else{
        alert("Mật khẩu sai vui lòng nhập lại !")
    }
    
}