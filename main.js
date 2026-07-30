function changeActiveBtn (e) {
    let btns1 = document.querySelectorAll(".navbar li");
    let btns2 = document.querySelectorAll(".navbarr li");
    btns1.forEach((btn) => {
        btn.classList.remove("active");
        btn.classList.add("not-active");
    });

    btns2.forEach((btn) => {
        btn.classList.remove("active");
        btn.classList.add("not-active");
    });

    e.classList.add("active");
}

function openHamburgerMenu (e) {
    if (e.classList.contains("close-btn")) {
        closeHamburgerMenu(e);
    }   else {
        console.log("Open Done");
        let menu = document.querySelector(".hamburger-menu");
        let divs = document.querySelectorAll(".hamburger-menu-btn div");
        let overlay = document.querySelector(".ui-overlay"); 
        let btn = document.querySelector(".hamburger-menu-btn");
        btn.classList.add("close-btn");

        menu.classList.remove("none");
        setTimeout(() => {
            menu.classList.add("open");
            overlay.classList.add("active");
        } , 100);

        divs.forEach((div) => {
            div.classList.add("open");
            div.classList.add("close-btn");
        });
    }
}

function closeHamburgerMenu (e) {
    console.log("Close Done");
    let menu = document.querySelector(".hamburger-menu");
    let divs = document.querySelectorAll(".hamburger-menu-btn div");
    let overlay = document.querySelector(".ui-overlay"); 
    let btn = document.querySelector(".hamburger-menu-btn");

    menu.classList.remove("open");
    overlay.classList.remove("active");

    setTimeout(() => {
        menu.classList.add("none");
    } , 500);

    divs.forEach((div) => {
        div.classList.remove("open");
        div.classList.remove("close-btn");
    });
    btn.classList.remove("close-btn");
}

const clicks = {
    "not-active": (e) => {
        changeActiveBtn(e);
    },
    
    "close-btn": (e) => {
        closeHamburgerMenu(e);
    },

    "hamburger-menu-btn": openHamburgerMenu,
    "first": openHamburgerMenu,
    "midle": openHamburgerMenu,
    "last": openHamburgerMenu,

}

window.addEventListener("click" , (e) => {
    for (let className of e.target.classList) {
        if (clicks[className]) {
            clicks[className](e.target);
            break;
        }
    }
});