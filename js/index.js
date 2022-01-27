let body = document.querySelector("body"),
    headerMenu = document.querySelector(".header-menu-content"),
    burgerOpenBtm = document.querySelector(".burger"),
    burgerCloseBtm = document.querySelector(".burger-close");


    burgerOpenBtm.onclick = opentBurger;
    burgerCloseBtm.onclick = closeBurger;

    function opentBurger(){
        headerMenu.style.display = "flex";
        body.style.overflow = "hidden";
    }
    function closeBurger(){
        headerMenu.style.display = "none";
        body.style.overflow = "auto";
    }
    