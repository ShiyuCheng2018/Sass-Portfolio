const menuBtn = document.querySelector(".menu-btn");
const hanmburger = document.querySelector(".menu-btn__burger");

let showMenu = false;


menuBtn.addEventListener("click", toggleMenu);

function toggleMenu(){
    if(!showMenu){
        hanmburger.classList.add("open");
        showMenu = true;
    }else {
        hanmburger.classList.remove("open");
        showMenu = false;
    }
};

