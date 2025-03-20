while(1){
   let choice = Number(prompt(`*.............Menu.............*
    1. Chức năng 1
    2. Chức năng 2
    3. Chức năng 3
    4. Chức năng 4
    0. Thoát
    *..............................*
    Nhập lựa chọn của bạn:`));
    if(choice == 0){
        break;
    }
    switch(choice){
        case 1:
            alert("Chức năng 1");
            break;
        case 2:
            alert("Chức năng 2");
            break;
        case 3:
            alert("Chức năng 3");
            break;
        case 4:
            alert("Chức năng 4");
            break;
        default:
            alert("Lựa chọn không hợp lệ!");
            break;
    }

   }