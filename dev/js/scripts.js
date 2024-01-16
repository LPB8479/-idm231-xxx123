let burgerBtn = document.querySelector(".hamburger");
let mainMenu = document.querySelector(".main-menu");
// let content = document.querySelector("*:not())

let canHideMenu = false;

burgerBtn.addEventListener("click", () => {
    console.log(canHideMenu);

    if(!canHideMenu){
        mainMenu.classList.add("dont-show-menu");
        canHideMenu = true;
    }else{
        mainMenu.classList.remove("dont-show-menu");
        canHideMenu = false;
    }
})

mainMenu.addEventListener("click", () => {
        mainMenu.classList.remove("dont-show-menu");
        canHideMenu = false;
})