let hour, minute, second;

hour = parseInt(prompt("Nhập giờ:"));
minute = parseInt(prompt("Nhập phút:"));
second = parseInt(prompt("Nhập giây:"));

if (hour < 0 || hour > 23 || minute < 0 || minute > 59 || second < 0 || second > 59) {
    alert("Không hợp lệ");
} else {
    let daynight = (hour >= 12) ? "PM" : "AM"; 
    let changedhour = (hour % 12 === 0) ? 12 : hour % 12; 

    alert(changedhour + ":" + minute + ":" + second + " " + daynight);
}
