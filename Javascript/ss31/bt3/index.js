let box = document.getElementsByClassName("box")
let change_Bg_color = document.getElementById("change-background-js")

for(let i = 0; i < box.length; i++){
    box[i].addEventListener('click',() => {
        change_Bg_color.style.backgroundColor = box[i].style.backgroundColor;
    })
}